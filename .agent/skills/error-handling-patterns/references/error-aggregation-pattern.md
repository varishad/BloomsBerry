# Error Aggregation Pattern

Collect multiple errors instead of failing on the first error. Particularly useful for validation.

## When to Use

- Form validation (check all fields, not just first error)
- Batch processing (process all items, report all failures)
- Configuration validation (find all issues at once)
- API request validation (return all validation errors)

## Basic Implementation

### Python

```python
class ErrorCollector:
    """Collect multiple errors during validation."""
    
    def __init__(self):
        self.errors: list[Exception] = []
    
    def add(self, error: Exception) -> None:
        """Add an error to the collection."""
        self.errors.append(error)
    
    def add_if_invalid(self, condition: bool, error: Exception) -> None:
        """Add error if condition is True."""
        if condition:
            self.add(error)
    
    def has_errors(self) -> bool:
        """Check if any errors were collected."""
        return len(self.errors) > 0
    
    def get_errors(self) -> list[Exception]:
        """Get all collected errors."""
        return self.errors.copy()
    
    def raise_if_errors(self) -> None:
        """Raise if any errors were collected."""
        if not self.has_errors():
            return
        
        if len(self.errors) == 1:
            raise self.errors[0]
        
        # Raise aggregate error with all messages
        messages = [str(e) for e in self.errors]
        raise ValidationError(
            f"{len(self.errors)} validation errors",
            details={"errors": messages}
        )

# Usage: Validate user data
def validate_user(data: dict) -> User:
    errors = ErrorCollector()
    
    # Check all fields
    if not data.get('email'):
        errors.add(ValidationError('Email is required', field='email'))
    elif '@' not in data.get('email', ''):
        errors.add(ValidationError('Email is invalid', field='email'))
    
    if not data.get('name'):
        errors.add(ValidationError('Name is required', field='name'))
    elif len(data.get('name', '')) < 2:
        errors.add(ValidationError('Name must be at least 2 characters', field='name'))
    
    if not data.get('age'):
        errors.add(ValidationError('Age is required', field='age'))
    elif data.get('age', 0) < 18:
        errors.add(ValidationError('Age must be 18 or older', field='age'))
    
    # Raise all errors at once
    errors.raise_if_errors()
    
    return User(**data)
```

### TypeScript

```typescript
class ErrorCollector {
    private errors: Error[] = [];

    add(error: Error): void {
        this.errors.push(error);
    }

    addIf(condition: boolean, error: Error): void {
        if (condition) {
            this.add(error);
        }
    }

    hasErrors(): boolean {
        return this.errors.length > 0;
    }

    getErrors(): Error[] {
        return [...this.errors];
    }

    throw(): never {
        if (this.errors.length === 0) {
            return;
        }

        if (this.errors.length === 1) {
            throw this.errors[0];
        }

        throw new AggregateError(
            this.errors,
            `${this.errors.length} errors occurred`
        );
    }
}

// Usage
function validateUser(data: any): User {
    const errors = new ErrorCollector();

    if (!data.email) {
        errors.add(new ValidationError('Email is required', { field: 'email' }));
    } else if (!isValidEmail(data.email)) {
        errors.add(new ValidationError('Email is invalid', { field: 'email' }));
    }

    if (!data.name || data.name.length < 2) {
        errors.add(new ValidationError('Name must be at least 2 characters', { field: 'name' }));
    }

    if (!data.age || data.age < 18) {
        errors.add(new ValidationError('Age must be 18 or older', { field: 'age' }));
    }

    if (errors.hasErrors()) {
        errors.throw();
    }

    return data as User;
}
```

## Structured Error Collection

For better error organization:

```python
from typing import Dict, List
from dataclasses import dataclass

@dataclass
class FieldError:
    field: str
    message: str
    code: str

class StructuredErrorCollector:
    """Collect errors organized by field."""
    
    def __init__(self):
        self.errors: Dict[str, List[FieldError]] = {}
    
    def add(self, field: str, message: str, code: str = None) -> None:
        """Add error for specific field."""
        if field not in self.errors:
            self.errors[field] = []
        
        self.errors[field].append(FieldError(
            field=field,
            message=message,
            code=code or 'VALIDATION_ERROR'
        ))
    
    def has_errors(self) -> bool:
        return len(self.errors) > 0
    
    def get_error_count(self) -> int:
        return sum(len(errors) for errors in self.errors.values())
    
    def to_dict(self) -> Dict[str, List[Dict]]:
        """Convert to dictionary format."""
        return {
            field: [
                {'message': err.message, 'code': err.code}
                for err in errors
            ]
            for field, errors in self.errors.items()
        }
    
    def raise_if_errors(self) -> None:
        if self.has_errors():
            raise ValidationError(
                f"Validation failed for {self.get_error_count()} field(s)",
                details=self.to_dict()
            )

# Usage
def validate_order(data: dict) -> Order:
    errors = StructuredErrorCollector()
    
    if not data.get('product_id'):
        errors.add('product_id', 'Product ID is required', 'REQUIRED')
    
    if not data.get('quantity'):
        errors.add('quantity', 'Quantity is required', 'REQUIRED')
    elif data['quantity'] < 1:
        errors.add('quantity', 'Quantity must be at least 1', 'MIN_VALUE')
    elif data['quantity'] > 100:
        errors.add('quantity', 'Quantity cannot exceed 100', 'MAX_VALUE')
    
    if not data.get('email'):
        errors.add('email', 'Email is required', 'REQUIRED')
    elif not is_valid_email(data['email']):
        errors.add('email', 'Email format is invalid', 'INVALID_FORMAT')
    
    errors.raise_if_errors()
    
    return Order(**data)
```

## Best Practices

1. **Collect all related errors** - Don't stop at first failure
2. **Organize by field** - Makes UI error display easier
3. **Include error codes** - Enables programmatic handling
4. **Provide context** - Field name, invalid value, constraint
5. **Return structured format** - Easy to parse and display

## When NOT to Use

- **Security checks** - Fail fast to prevent enumeration attacks
- **Critical errors** - Don't continue if system is in bad state
- **Performance sensitive** - Extra validation has cost
