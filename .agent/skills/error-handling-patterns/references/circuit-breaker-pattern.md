# Circuit Breaker Pattern

Prevent cascading failures by failing fast when a service is down.

## Concept

A circuit breaker acts like an electrical circuit breaker - it trips when failures exceed a threshold, preventing additional requests until the service recovers.

## States

1. **CLOSED**: Normal operation, requests pass through
2. **OPEN**: Failing, reject requests immediately
3. **HALF_OPEN**: Testing if service recovered

## Full Implementation

```python
from enum import Enum
from datetime import datetime, timedelta
from typing import Callable, TypeVar, Generic

T = TypeVar('T')

class CircuitState(Enum):
    CLOSED = "closed"       # Normal operation
    OPEN = "open"          # Failing, reject requests
    HALF_OPEN = "half_open"  # Testing if recovered

class CircuitBreakerOpenError(Exception):
    """Raised when circuit breaker is open."""
    pass

class CircuitBreaker(Generic[T]):
    def __init__(
        self,
        failure_threshold: int = 5,
        timeout: timedelta = timedelta(seconds=60),
        success_threshold: int = 2
    ):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.success_threshold = success_threshold
        self.failure_count = 0
        self.success_count = 0
        self.state = CircuitState.CLOSED
        self.last_failure_time = None

    def call(self, func: Callable[[], T]) -> T:
        """Execute function through circuit breaker."""
        if self.state == CircuitState.OPEN:
            if self._should_attempt_reset():
                self.state = CircuitState.HALF_OPEN
                self.success_count = 0
            else:
                raise CircuitBreakerOpenError(
                    f"Circuit breaker is OPEN. "
                    f"Will retry after {self.timeout.total_seconds()}s"
                )

        try:
            result = func()
            self._on_success()
            return result
        except Exception as e:
            self._on_failure()
            raise

    def _should_attempt_reset(self) -> bool:
        """Check if enough time has passed to attempt reset."""
        return datetime.now() - self.last_failure_time > self.timeout

    def _on_success(self):
        """Handle successful call."""
        self.failure_count = 0
        if self.state == CircuitState.HALF_OPEN:
            self.success_count += 1
            if self.success_count >= self.success_threshold:
                self.state = CircuitState.CLOSED
                self.success_count = 0

    def _on_failure(self):
        """Handle failed call."""
        self.failure_count += 1
        self.last_failure_time = datetime.now()
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN

# Usage
api_circuit_breaker = CircuitBreaker(
    failure_threshold=5,      # Open after 5 failures
    timeout=timedelta(seconds=60),  # Try again after 60s
    success_threshold=2       # Close after 2 successes
)

def fetch_user_data(user_id: str) -> dict:
    """Fetch user data with circuit breaker protection."""
    try:
        return api_circuit_breaker.call(
            lambda: external_api.get_user(user_id)
        )
    except CircuitBreakerOpenError:
        # Fallback to cache or return default
        return cache.get_user(user_id) or {}
```

## TypeScript Implementation

```typescript
enum CircuitState {
    CLOSED = 'closed',
    OPEN = 'open',
    HALF_OPEN = 'half_open'
}

class CircuitBreaker<T> {
    private failureCount = 0;
    private successCount = 0;
    private state = CircuitState.CLOSED;
    private lastFailureTime: Date | null = null;

    constructor(
        private failureThreshold: number = 5,
        private timeout: number = 60000, // ms
        private successThreshold: number = 2
    ) {}

    async call(fn: () => Promise<T>): Promise<T> {
        if (this.state === CircuitState.OPEN) {
            if (this.shouldAttemptReset()) {
                this.state = CircuitState.HALF_OPEN;
                this.successCount = 0;
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }

        try {
            const result = await fn();
            this.onSuccess();
            return result;
        } catch (error) {
            this.onFailure();
            throw error;
        }
    }

    private shouldAttemptReset(): boolean {
        if (!this.lastFailureTime) return false;
        return Date.now() - this.lastFailureTime.getTime() > this.timeout;
    }

    private onSuccess(): void {
        this.failureCount = 0;
        if (this.state === CircuitState.HALF_OPEN) {
            this.successCount++;
            if (this.successCount >= this.successThreshold) {
                this.state = CircuitState.CLOSED;
                this.successCount = 0;
            }
        }
    }

    private onFailure(): void {
        this.failureCount++;
        this.lastFailureTime = new Date();
        if (this.failureCount >= this.failureThreshold) {
            this.state = CircuitState.OPEN;
        }
    }
}

// Usage
const apiBreaker = new CircuitBreaker<User>(5, 60000, 2);

async function getUserData(id: string): Promise<User> {
    return apiBreaker.call(() => externalApi.getUser(id));
}
```

## Best Practices

1. **Set appropriate thresholds**: Too low = false positives, too high = slow recovery
2. **Monitor state changes**: Log when circuit opens/closes
3. **Provide fallbacks**: Cache, defaults, or degraded functionality
4. **Different breakers per service**: Don't share across unrelated services
5. **Combine with timeouts**: Prevent hanging requests
