# Writing Helpful Error Messages

Error messages are your users' (and your future self's) best friend during debugging. Write them well.

## The Three-Part Formula

Good error messages have three parts:

1. **What happened** - The error itself
2. **Why it happened** - Root cause or likely reason
3. **How to fix it** - Actionable next steps

## Examples

### ❌ Bad Error Messages

```
Error
Error occurred
Failed
Invalid input
Exception in thread "main" java.lang.NullPointerException
```

**Problems:**
- No context
- No actionable guidance
- No explanation
- Technical jargon without explanation

### ✅ Good Error Messages

```
Failed to save user profile: Email address "user@invalid" is not valid. 
Please provide a valid email address (e.g., user@example.com).

Could not connect to database at localhost:5432. 
The database might be down or unreachable. 
Check that PostgreSQL is running and the connection details are correct.

File not found: /data/config.json
The application requires a configuration file at this location.
Create the file or set CONFIG_PATH environment variable to point to your config file.

Payment processing failed: Card was declined (insufficient funds).
Please use a different payment method or contact your bank.

API rate limit exceeded (60 requests/minute).
Your application has made too many requests.
Wait 30 seconds before retrying, or contact support to increase your limit.
```

## Guidelines by Audience

### For End Users

**Do:**
- Use plain language
- Be empathetic and helpful
- Suggest concrete actions
- Avoid technical jargon

**Don't:**
- Blame the user
- Show stack traces
- Expose internal details
- Use error codes without explanation

**Examples:**

```
✅ "We couldn't process your payment. Please check your card details and try again."
❌ "Payment gateway returned status 402: INSUFFICIENT_FUNDS"

✅ "We're having trouble connecting to our servers. Please check your internet connection."
❌ "Connection timeout: TCP handshake failed at 192.168.1.1:8080"
```

### For Developers/APIs

**Do:**
- Include error codes for programmatic handling
- Provide request IDs for debugging
- Include relevant context (parameters, state)
- Reference documentation

**Don't:**
- Be vague
- Omit stack traces (in logs)
- Hide the root cause

**Examples:**

```json
✅ {
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Email address is required",
        "field": "email",
        "request_id": "req_abc123",
        "documentation_url": "https://docs.example.com/errors#validation"
    }
}

❌ {
    "error": "Bad request"
}
```

### For Operations/Logs

**Do:**
- Include timestamps
- Add context (user ID, request ID, environment)
- Preserve stack traces
- Make them searchable/parseable

**Don't:**
- Log sensitive data (passwords, tokens)
- Be too verbose
- Use inconsistent formats

**Examples:**

```
✅ [2026-01-18 16:35:34] ERROR [req_abc123] Payment processing failed for order ORD_456 (user_id: USR_789): Gateway timeout after 30s (status: 504)
Stack trace: ...

❌ Error
```

## Error Message Templates

### Validation Errors

```
"{Field} {constraint}. {suggestion}"

Examples:
- "Email address must be valid. Please use format: user@example.com"
- "Password must be at least 8 characters. Current length: 5"
- "Age must be 18 or older. Current value: 16"
```

### Not Found Errors

```
"{Resource} not found. {context} {suggestion}"

Examples:
- "User not found. No user exists with ID '123'. Check the user ID and try again."
- "File not found: /data/config.json. Ensure the file exists or set CONFIG_PATH."
```

### Permission Errors

```
"{Action} not permitted. {reason} {suggestion}"

Examples:
- "Access denied. You need 'admin' role to perform this action. Contact your administrator."
- "Cannot delete file. File is read-only. Change file permissions or contact support."
```

### External Service Errors

```
"{Service} unavailable. {reason} {suggestion}"

Examples:
- "Payment gateway unavailable. The service might be down. Try again in a few minutes."
- "Email service failed. Could not send confirmation email. Your account was created successfully."
```

### Rate Limiting

```
"Rate limit exceeded ({limit}). {context} {suggestion}"

Examples:
- "Rate limit exceeded (100 requests/hour). Try again in 30 minutes or upgrade your plan."
- "Too many login attempts. Account locked for 15 minutes for security."
```

## Context to Include

Always include when relevant:

- **Resource identifiers**: IDs, names, paths
- **Constraints**: Limits, requirements, expectations
- **Current state**: What was attempted, what failed
- **Suggestions**: Next steps, alternatives, documentation

## Language and Tone

### Use Active Voice

```
✅ "Could not connect to database"
❌ "Database connection could not be established"

✅ "Missing required field: email"
❌ "Required field email was not provided"
```

### Be Specific

```
✅ "Password must contain at least one uppercase letter"
❌ "Invalid password"

✅ "File size exceeds limit (5MB max, uploaded: 8MB)"
❌ "File too large"
```

### Be Helpful, Not Judgmental

```
✅ "Email format invalid. Expected format: user@example.com"
❌ "You entered an invalid email"

✅ "Account not found. Check your username and try again."
❌ "Wrong username"
```

## Special Cases

### Multiple Errors

When multiple things are wrong, list them all:

```json
{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Validation failed for 3 fields",
        "errors": [
            {
                "field": "email",
                "message": "Email is required"
            },
            {
                "field": "password",
                "message": "Password must be at least 8 characters"
            },
            {
                "field": "age",
                "message": "Age must be 18 or older"
            }
        ]
    }
}
```

### Sensitive Operations

Don't leak information:

```
✅ "Invalid username or password"
❌ "Username exists but password is incorrect"

✅ "If an account exists for this email, we sent a reset link"
❌ "No account found for this email"
```

### Technical Errors

Provide both user-friendly and technical details:

```json
{
    "error": {
        "message": "We're experiencing technical difficulties. Please try again later.",
        "code": "INTERNAL_ERROR",
        "request_id": "req_abc123",
        "technical_details": {
            "exception": "NullPointerException",
            "location": "UserService.java:42"
        }
    }
}
```

## Checklist

Before shipping, verify your error messages:

- [ ] Explain what happened clearly
- [ ] Provide context (what, where, when)
- [ ] Suggest how to fix or work around
- [ ] Use appropriate tone for audience
- [ ] Include error codes for programmatic handling
- [ ] Don't expose sensitive information
- [ ] Are actionable (user can do something)
- [ ] Are searchable (for support/debugging)
- [ ] Follow consistent format across app
