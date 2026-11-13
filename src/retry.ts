export interface RetryPolicy {
  maxAttempts: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

export function nextBackoffMs(attempt: number, policy: RetryPolicy): number {
  const raw = policy.baseDelayMs * Math.pow(2, Math.max(0, attempt - 1));
  return Math.min(raw, policy.maxDelayMs);
}
