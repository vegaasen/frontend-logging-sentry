module.exports = config => {
  config.set({
    colors: true,
    singleRun: true,
    autoWatch: false,
    basePath: process.cwd(),
    files: [
      'src/**/*.ts',
      'test/**/*.spec.ts',
    ],
    frameworks: ['jasmine', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    reporters: ['progress', 'karma-typescript'],
    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
      'test/**/*.spec.ts': ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
      compilerOptions: {
        declaration: false,
        allowJs: true,
      },
      bundlerOptions: {
        sourceMap: true,
        transforms: [require('karma-typescript-es6-transform')()],
      },
      include: ['test/**/*.ts'],
      reports: {
        html: 'coverage', 'text-summary': '',
      },
    },
  });
};