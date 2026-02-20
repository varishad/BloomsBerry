# Error Handling Checklist

Use this checklist before shipping code to ensure robust error handling.

## Input Validation

- [ ] All inputs are validated early (fail fast)
- [ ] Invalid inputs produce clear error messages
- [ ] Validation errors include which field failed and why
- [ ] Edge cases are handled (null, empty, extreme values)

## Error Handling Coverage

- [ ] All external calls have error handling (API, database, filesystem)
- [ ] Network operations have timeouts
- [ ] Async operations handle rejections/errors
- [ ] All error paths are tested
- [ ] Unexpected errors are caught at appropriate level

## Resource Management

- [ ] Files are closed (use context managers/try-finally/RAII)
- [ ] Database connections are released
- [ ] Network connections are cleaned up
- [ ] Locks are released in error paths
- [ ] Memory is freed appropriately

## Error Messages

- [ ] Error messages explain what happened
- [ ] Error messages suggest how to fix the issue
- [ ] Technical details are included for debugging
- [ ] User-facing errors don't expose sensitive information
- [ ] Error codes/types are consistent and documented

## Logging

- [ ] Errors are logged with appropriate level (error, warning, info)
- [ ] Log messages include context (user ID, request ID, etc.)
- [ ] Stack traces are preserved
- [ ] Sensitive data is not logged
- [ ] Expected errors don't spam logs (e.g., "file not found" during normal operation)

## Resilience Patterns

- [ ] Retries have exponential backoff
- [ ] Circuit breakers protect external services
- [ ] Timeouts are set for all external calls
- [ ] Fallback behavior exists for non-critical features
- [ ] Rate limiting is in place for expensive operations

## Recovery

- [ ] Transactions are rolled back on error
- [ ] Partial states are cleaned up
- [ ] Idempotency is considered for retries
- [ ] Recovery paths are tested
- [ ] System can recover from crashes

## Testing

- [ ] Error paths have unit tests
- [ ] Edge cases are tested
- [ ] Timeout scenarios are tested
- [ ] Resource exhaustion is tested
- [ ] Error messages are verified

## Documentation

- [ ] Error types are documented
- [ ] Common errors have troubleshooting guides
- [ ] API errors are documented with status codes
- [ ] Error recovery procedures are documented

## Anti-Patterns to Avoid

- [ ] No empty catch blocks (silent failures)
- [ ] Not catching Exception/Throwable broadly without re-throwing
- [ ] Not returning generic error codes without context
- [ ] Not logging and then re-throwing (duplicate logs)
- [ ] Not swallowing errors without logging

## Checklist for Specific Scenarios

### API Endpoints
- [ ] Input validation with clear 400 responses
- [ ] Authentication errors return 401
- [ ] Authorization errors return 403
- [ ] Not found resources return 404
- [ ] Server errors return 500 with request ID
- [ ] Rate limiting returns 429
- [ ] All errors have consistent structure

### Database Operations
- [ ] Transactions are used where appropriate
- [ ] Rollback on error
- [ ] Connection pooling handles exhaustion
- [ ] Deadlocks are detected and retried
- [ ] Unique constraint violations are handled

### External API Calls
- [ ] Timeouts are configured
- [ ] Retries with backoff for transient errors
- [ ] Circuit breaker prevents cascading failures
- [ ] Fallback data available
- [ ] API errors are wrapped with context

### File Operations
- [ ] Files are closed in all paths (use context managers)
- [ ] Permissions errors are handled
- [ ] Disk space errors are handled
- [ ] Paths are validated (no traversal attacks)
- [ ] Temporary files are cleaned up

### Async/Concurrent Code
- [ ] Promise rejections are handled
- [ ] Async errors propagate correctly
- [ ] Race conditions are prevented
- [ ] Deadlocks are impossible or detected
- [ ] Timeouts prevent hanging
