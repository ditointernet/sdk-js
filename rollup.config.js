// import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const banner = `/*
 * @preserve
 * Dito v${pkg.version} (${pkg.homepage})
 * ${pkg.description}
 * MIT License
 *
 */`;

const output = [
  {
    file: pkg.main,
    format: 'umd',
    name: pkg.name,
    banner,
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const regularConfig = {
  input: 'lib/index.js',
  output,
};

// const minifiedConfig = Object.assign({}, regularConfig, {
//   plugins: [
//     typescript(),
//     uglify({
//       output: {
//         comments: /@preserve/,
//       },
//     })
//   ],
//   output: [
//     {
//       file: pkg.browser,
//       format: 'umd',
//       name: pkg.name,
//       banner,
//     },
//   ],
// });

export default [regularConfig];
