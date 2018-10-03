import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import license from 'rollup-plugin-license';

const commitHash = require('child_process').execSync('git rev-parse --short HEAD', {encoding: 'utf-8'}).trim();

const bundleConfig = {
  input: 'src/index.ts',
  output: {
    format: 'iife',
    name: 'Bring',
    sourcemap: true,
  },
  context: 'window',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.build.json',
      tsconfigOverride: {compilerOptions: {declaration: false}},
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    license({
      sourcemap: true,
      banner: `/*! @bring/logging-sentry <%= pkg.version %> (${commitHash}) | https://github.com/bring/logging-sentry */`,
    }),
  ],
};

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      interop: false,
    },
    external: ['@sentry/browser'],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
    ],
  },
  Object.assign({}, bundleConfig, {
    output: Object.assign({}, bundleConfig.output, {
      file: 'build/bundle.js',
    }),
  }),
  Object.assign({}, bundleConfig, {
    output: Object.assign({}, bundleConfig.output, {
      file: 'build/bundle.min.js',
    }),
    // Uglify has to be at the end of compilation, BUT before the license banner
    plugins: bundleConfig.plugins.slice(0, -1).concat(uglify()).concat(bundleConfig.plugins.slice(-1)),
  }),
];