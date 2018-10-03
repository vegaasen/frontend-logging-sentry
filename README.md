@bring/logging-sentry
==

## Introduction

...

## Build

...

## Usage

...

### Node/Yarn dependency

```
yarn add 
# [OR] 
npm add 
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

### Initializing

...

### Logging

...

## Contribution

...