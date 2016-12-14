# Template for js module and node app

**This branch only works with FBI v3.0.0+**

> 模版主要定位：兼容node v6+的 **npm模块**、**node应用**
>
> 也可以作为浏览器端的js模块模版(要么不要使用太新的特性，要么详细配置`/fbi/config/buble.config.js`转换规则)

## 特性
1. 将ES2017代码转换为ES2015 (async => generator)
1. 实时监听，实时编译，自动重启服务
1. 支持sourceMap，方便定位错误
1. 编译速度数倍提升

## 配置
```js
// fbi/config.js => rollup

{
  /**
    * 指定入口文件
    * 不指定: '' 或 false 或 null 或 0 （fbi会将src目录下的所有js文件当作入口文件，且保持目录结构）
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
  /**
    * 代码前嵌入
  */
  banner: `
require('source-map-support').install();
`,
  outro: '// this is outro',
  /**
    * 代码末嵌入
  */
  footer: '// this is footer'
}
```
## 使用

1. 初始化模版: `fbi init mod`

1. js模块
    1. 指定模块出方式 ('amd', 'cjs', 'es', 'iife', 'umd')
    1. 指定入口文件(若需要)
    1. 在 `src` 目录新建文件
    1. `fbi s` 启动文件监听服务器
    1. 改动 `src` 目录下的文件，fbi会自动编译
    1. 无需监听的情况下，`fbi b` 即可编译

1. node web服务
    1. 安装依赖，如：`tnpm i -S koa@next`
    1. `fbi/config.js => rollup => format` 保持 `cjs` 即可
    1. 在 `src` 目录新建文件
    1. `fbi s` 启动文件监听服务器
    1. 部署时，打包`dst`目录 => 上传服务器 => `npm start` (使用全局pm2)

> 可更改 `fbi/config.js => dist`，改变生成目录路径

注意： 用作浏览器端js模块时，请配置 `fbi/config/buble.config.js`，以保证兼容性
