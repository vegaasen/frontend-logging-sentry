import {Sentrylogger} from "../src";
import * as Sentry from '@sentry/browser';

const config = {
    valid: {url: '', environment: {current: 'dev', valid: ['dev']}, user: {id: 'yep'}, app: {version: 'ye'}},
    invalid: {
        environment: {url: '', environment: {current: 'ved', valid: ['dev']}, user: {id: 'yep'}, app: {version: 'ye'}}
    }
};

describe('SentryLogger', () => {

    describe('SentryloggerTest', () => {

        it('should configure with provided configuration', () => {
            let sentrylogger = new Sentrylogger();
            spyOn(Sentry, 'init');
            sentrylogger.initialize(config.valid);
            expect(Sentry.init).toHaveBeenCalled();
        });
        it('should not configure with provided configuration - wrong env', () => {
            let sentrylogger = new Sentrylogger();
            spyOn(Sentry, 'init');
            sentrylogger.initialize(config.invalid.environment);
            expect(Sentry.init).toHaveBeenCalledTimes(0);
        });
        it('should not configure with nilled configuration', () => {
            let sentrylogger = new Sentrylogger();
            spyOn(Sentry, 'init');
            sentrylogger.initialize(null);
            expect(Sentry.init).toHaveBeenCalledTimes(0);
        })

    })

});