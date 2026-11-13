import { nextBackoffMs, RetryPolicy } from "./retry.js";

export interface Job {
  id: string;
  topic: string;
  payload: Record<string, unknown>;
  attempts: number;
}

export class Dispatcher {
  constructor(private readonly retryPolicy: RetryPolicy) {}

  scheduleRetry(job: Job): { retryInMs: number | null; deadLetter: boolean } {
    if (job.attempts >= this.retryPolicy.maxAttempts) {
      return { retryInMs: null, deadLetter: true };
    }
    return {
      retryInMs: nextBackoffMs(job.attempts + 1, this.retryPolicy),
      deadLetter: false,
    };
  }
}
