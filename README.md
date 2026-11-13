# job-dispatch

Background job dispatcher with bounded worker concurrency, lease heartbeats, and exponential retry backoff.

## Modules

- `src/dispatcher.ts` - Worker pool, lease claiming, and per-job execution timeouts.
- `src/retry.ts` - Exponential backoff policy and dead-letter routing.
