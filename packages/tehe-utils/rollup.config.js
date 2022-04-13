import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
const pkg = require('./package.json');

// rollup-plugin-node-resolve ---帮助 Rollup 查找外部模块，然后导入
// rollup-plugin-commonjs ---将CommonJS模块转换为 ES2015 供 Rollup 处理
// rollup-plugin-babel --- 让我们可以使用es6新特性来编写代码
// rollup-plugin-terser --- 压缩js代码，包括es6代码压缩
// rollup-plugin-eslint --- js代码检测
const isDev = process.env.NODE_ENV !== 'production';

//公用文件配置
const commonPlugins = [
  resolve({
    preferBuiltins: false
  }),
  commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
  eslint({
    throwOnError: true,
    throwOnWarning: true,
    include: ['src/**'],
    exclude: ['node_modules/**']
}),
  babel({
    exclude: 'node_modules/**', // 防止打包node_modules下的文件
    babelHelpers: 'runtime',       // 使plugin-transform-runtime生效
  }),
  !isDev && terser()
];
const external = ['vue'];
const baseConfig = {
  input: 'main.js',
 
    // 打包全部

      output: [
        {
          file: pkg.main,
          format: 'cjs',
        },
        {
          file: pkg.unpkg,
          format: 'umd',
          name: 'tehe-utils',
        },
        {
          file: pkg.module,
          format: 'esm',
        }
      ],
      external,
      plugins: [...commonPlugins]

    }
module.exports = baseConfig;