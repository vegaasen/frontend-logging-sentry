import * as Sentry from '@sentry/browser';

export interface LoggingConfiguration {
    user: {
        id: string
    },
    app: {
        version?: string
    },
    url: string,
    environment: {
        current: string,
        valid: string[]
    }
}

export class Sentrylogger {

    public initialize(configuration: LoggingConfiguration) {
        if (configuration) {
            const currentEnvironment = configuration.environment.current;
            if (currentEnvironment && configuration.environment.valid.some(env => env === currentEnvironment)) {
                Sentry.init(
                    {
                        dsn: configuration.url,
                        environment: currentEnvironment,
                        release: configuration.app.version,
                    },
                );
                Sentry.configureScope((scope) => {
                    scope.setUser({id: configuration.user.id});
                    scope.setTag('page_locale', navigator.language || 'undef')
                });
                console.debug(`[INFO] Sentry configured for ${currentEnvironment}`)
            } else {
                console.warn(`[WARN] Sentry: Either environment ${currentEnvironment} is not defined, or is not within ${JSON.stringify(configuration.environment.valid)}. Ignored`);
            }
        } else {
            console.warn('[WARN] Sentry: Unable to initialize as the configuration provided is undefined');
        }
    }

}