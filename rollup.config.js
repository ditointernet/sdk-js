import typescript from 'rollup-plugin-typescript';
// import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const banner = `/* 
 * @preserve
 * gfynonce v${pkg.version} (${pkg.homepage})
 * ${pkg.description}
 * MIT License
 * 
 */`;

const plugins = [typescript()];

const regularConfig = {
  plugins,
  input: 'lib/index.ts',
  output: [
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
  ],
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
