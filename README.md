@bring/logging-sentry
==

## Introduction

More and more of our frontend-applications have a requirement for logging. To avoid having a separate configuration and implementation of Sentry within all of these, this simple library can be used instead.

It basically defines a single resource, `@sentry/browser`. If the version changes, library alters or similar, we should only have to upgrade the package once and it will work all over Bring' applications. 

## Build

```
yarn test
yarn build
yarn publish
```

## Usage

todo.

### Node/Yarn dependency

```
yarn add @bring/logging-sentry
# [OR] 
npm add @bring/logging-sentry
```

### Configuration
In order to use the sentry-library, you will require a similar configuration on your path.

```
module.exports = {
  logging: {
    user: {
      id: '',
    },
    app: {
      version: __PROJECT_VERSION__,
    },
    url: 'https://73d51a46368a443fbebb93884fa32b87@sentry.io/1291755',
    environment: {
      current: '',
      valid: ['test', 'qa', 'production'],
    },
  },
};
```

This can be imported in your application as following:

```
const configuration = require('./config/config');
```

(more: todo.)

### Initializing

```
import {Sentrylogger} from '@bring/logging-sentry';
// [OR]
const Sentrylogger = require('@bring/logging-sentry');
```

From there, you can simply perform the following initialization action:

```
Sentrylogger.initialize(configuration)
// [OR]
Sentrylogger.initialize({url: '', user: {id: ''}...})
```

### Logging

```
import {Logging} from '@bring/logging-sentry';
// [OR]
const Logging = require('@bring/logging-sentry');
```

Then just call the methods you require for the particular logged event:

* `Logging.logInfo(..)`
* `Logging.logWarn(..)`
* `Logging.logError(..)`
* `Logging.logException(..)`
* ...

## Contribution

:-)