module.exports = {
  // template: 'mod',
  templateDescription: '(该模版仅兼容FBI v3.0.0+) FBI 模版，用于构建js模块、node服务，兼容node v6+',
  npm: {
    alias: 'npm',
    options: '', // '--registry=https://registry.npm.taobao.org'
  },
  alias: {
    b: 'build',
    s: 'serve'
  },
  dist: './dst/', // 生成目录路径
  // watch延迟时间(单位：秒)
  watchDelay: 0,
  // 用做nodemon入口文件
  mainFile: 'dst/index.js',
  rollup: {
    /**
     * 指定入口文件
     * 不指定: '' 或 false 或 null 或 0
     * 指定单个文件: 'src/index.js'
     * 指定多个文件: ['src/index.js', 'src/helpers/demo.js']
     */
    entry: '',
    /**
     * 模块输出方式
     * 可选值: 'amd', 'cjs', 'es', 'iife', 'umd'
     */
    format: 'cjs',
    /**
     * 模块名称 （用于UMD/IIFE情形）
     * 效果: var MyBundle = (function () {...
     */
    moduleName: 'myModule',
    /**
     * 模块ID（用于AMD/UMD情形）
     * 效果: define('my-bundle',...
     */
    moduleId: 'myModuleId',
    banner: `
require('source-map-support').install()
    `,
    outro: '// this is outro',
    footer: '// this is footer'
  },
}
