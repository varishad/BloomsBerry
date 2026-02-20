# Graceful Degradation Pattern

Provide fallback functionality when errors occur instead of complete failure.

## Philosophy

When a feature breaks, degrade gracefully:
- Provide reduced functionality instead of no functionality
- Use cached/stale data instead of no data
- Show default content instead of errors
- Log but don't crash

## Basic Pattern

```python
from typing import Optional, Callable, TypeVar

T = TypeVar('T')

def with_fallback(
    primary: Callable[[], T],
    fallback: Callable[[], T],
    log_error: bool = True
) -> T:
    """Try primary function, fall back to fallback on error."""
    try:
        return primary()
    except Exception as e:
        if log_error:
            logger.warning(f"Primary function failed, using fallback: {e}")
        return fallback()

# Usage
def get_user_recommendations(user_id: str) -> List[Product]:
    return with_fallback(
        primary=lambda: ai_recommendations.get(user_id),
        fallback=lambda: get_popular_products()
    )
```

## Multiple Fallbacks

Try multiple sources in order:

```python
def try_function(func: Callable[[], Optional[T]]) -> Optional[T]:
    """Try function, return None on error."""
    try:
        return func()
    except Exception:
        return None

def get_exchange_rate(currency: str) -> float:
    """Get exchange rate with multiple fallbacks."""
    # Try primary API
    rate = try_function(lambda: primary_api.get_rate(currency))
    if rate:
        return rate
    
    # Try secondary API
    rate = try_function(lambda: secondary_api.get_rate(currency))
    if rate:
        return rate
    
    # Try cache
    rate = try_function(lambda: cache.get_rate(currency))
    if rate:
        return rate
    
    # Return default
    logger.error(f"All sources failed for {currency}, using default rate")
    return 1.0  # Default rate
```

## Cached Fallback

Use stale cache when service is down:

```python
from datetime import datetime, timedelta

class CachedFallback:
    def __init__(self, ttl: timedelta = timedelta(hours=1)):
        self.cache = {}
        self.ttl = ttl
    
    def get(self, key: str, fetch: Callable[[], T]) -> T:
        """Get data with cached fallback."""
        try:
            # Try to fetch fresh data
            data = fetch()
            # Update cache
            self.cache[key] = {
                'data': data,
                'timestamp': datetime.now()
            }
            return data
        except Exception as e:
            # Check if we have cached data
            if key in self.cache:
                cached = self.cache[key]
                age = datetime.now() - cached['timestamp']
                
                # Use stale cache on error
                logger.warning(
                    f"Fetch failed, using cached data (age: {age}): {e}"
                )
                return cached['data']
            
            # No cache available, re-raise
            raise

# Usage
cache = CachedFallback(ttl=timedelta(hours=1))

def get_weather(city: str) -> Weather:
    return cache.get(
        f"weather:{city}",
        lambda: weather_api.fetch(city)
    )
```

## Partial Degradation

Provide partial functionality:

```typescript
async function getUserProfile(userId: string): Promise<UserProfile> {
    const profile: Partial<UserProfile> = {
        id: userId,
        name: 'Loading...',
        avatar: DEFAULT_AVATAR
    };

    try {
        // Try to get full profile
        const fullProfile = await api.getUserProfile(userId);
        return fullProfile;
    } catch (error) {
        logger.warn(`Failed to load full profile for ${userId}`, error);
    }

    try {
        // Fallback: get basic info only
        const basicInfo = await api.getUserBasicInfo(userId);
        return {
            ...profile,
            name: basicInfo.name,
            email: basicInfo.email
        } as UserProfile;
    } catch (error) {
        logger.warn(`Failed to load basic info for ${userId}`, error);
    }

    try {
        // Fallback: get from cache
        const cached = await cache.get(`user:${userId}`);
        if (cached) {
            return cached;
        }
    } catch (error) {
        logger.error(`Cache also failed for ${userId}`, error);
    }

    // Return minimal profile
    return profile as UserProfile;
}
```

## Feature Flags for Degradation

Automatically disable failing features:

```python
class FeatureFlag:
    def __init__(self, name: str, error_threshold: int = 5):
        self.name = name
        self.enabled = True
        self.error_count = 0
        self.error_threshold = error_threshold
    
    def execute(self, func: Callable[[], T], fallback: Callable[[], T]) -> T:
        if not self.enabled:
            logger.info(f"Feature {self.name} is disabled, using fallback")
            return fallback()
        
        try:
            result = func()
            # Reset error count on success
            self.error_count = 0
            return result
        except Exception as e:
            self.error_count += 1
            logger.error(f"Feature {self.name} error #{self.error_count}: {e}")
            
            if self.error_count >= self.error_threshold:
                self.enabled = False
                logger.critical(
                    f"Feature {self.name} disabled after {self.error_count} errors"
                )
            
            return fallback()

# Usage
ai_search = FeatureFlag('ai_search', error_threshold=5)

def search(query: str) -> List[Result]:
    return ai_search.execute(
        lambda: ai_powered_search(query),
        lambda: traditional_search(query)
    )
```

## UI Degradation

Show different UI based on what's available:

```typescript
function ProductRecommendations({ userId }: Props) {
    const [recommendations, setRecommendations] = useState<Product[]>([]);
    const [source, setSource] = useState<'ai' | 'popular' | 'none'>('ai');

    useEffect(() => {
        async function loadRecommendations() {
            try {
                // Try AI recommendations
                const aiRecs = await api.getAIRecommendations(userId);
                setRecommendations(aiRecs);
                setSource('ai');
                return;
            } catch (error) {
                logger.warn('AI recommendations failed', error);
            }

            try {
                // Fallback to popular products
                const popular = await api.getPopularProducts();
                setRecommendations(popular);
                setSource('popular');
                return;
            } catch (error) {
                logger.error('Popular products also failed', error);
                setSource('none');
            }
        }

        loadRecommendations();
    }, [userId]);

    if (source === 'none') {
        return null; // Don't show section at all
    }

    return (
        <div>
            <h2>
                {source === 'ai' 
                    ? 'Recommended for You' 
                    : 'Popular Products'}
            </h2>
            <ProductGrid products={recommendations} />
        </div>
    );
}
```

## Best Practices

1. **Log degradation** - Track when fallbacks are used
2. **Monitor fallback usage** - Alert if fallbacks are常used
3. **Test fallback paths** - Ensure fallbacks actually work
4. **Set timeouts** - Don't wait forever for primary
5. **Document degraded behavior** - Users should understand limitations
6. **Recover gracefully** - Switch back to primary when available

## When to Use

✅ **Use graceful degradation for:**
- Non-critical features (recommendations, analytics)
- External service dependencies
- Performance optimizations (caching, CDNs)
- Progressive enhancement

❌ **Don't use for:**
- Security features (authentication, authorization)
- Financial transactions
- Data integrity operations
- Critical business logic
