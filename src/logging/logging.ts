import * as Sentry from '@sentry/browser';
import {Severity} from '@sentry/browser';

export class Logging {

    public log(message: string): void {
        this.logInfo(message);
    }

    public logInfo(message: string): void {
        Sentry.captureMessage(message, Severity.Info);
    }

    public logWarn(message: string): void {
        Sentry.captureMessage(message, Severity.Warning);
    }

    public logError(message: string): void {
        Sentry.captureMessage(message, Severity.Error);
    }

    public logException(exeception: Error): void {
        Sentry.captureException(exeception);
    }

    public logEvent(event: Sentry.SentryEvent): void {
        Sentry.captureEvent(event);
    }

}