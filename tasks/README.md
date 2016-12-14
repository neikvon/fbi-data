# FBI Tasks

## 简介

任意名称里不包含` config `字符的js文件都可以成为一个任务，存放于` fbi `目录即可被FBI使用。

### 已有任务
- `clone.js`: 用于克隆fbi数据仓库
  - 使用方法: `fbi clone http://git.code.oa.com/sng-fe-team/fbi-data.git`

- `pull.js`: 用于更新fbi数据仓库
  - 使用方法: `fbi pull`
  - 本地有改动仍可使用`pull`更新(本地改动会被忽略)，本质是先`git reset --hard`, 再`git pull`

- `serve.js`: 基于Koa v2的静态服务器，可自定义起始端口，并自动选择可用端口。
  - 如：`fbi serve` (使用`ctx.options.server.port`为起始端口，默认为8888)
  - 如：`fbi serve -9000` (若9000端口可用，则用9000；若9000不可用，则依次+1找到可用端口)

- `run.js`: 执行 npm scripts
  - 执行的方法是项目根目录中`package.json ＝> scripts`里定义的方法
  - 使用方法：`fbi run build`


## 如何使用本目录？

### 首先，请确认已安装fbi
```bash
$ npm i -g fbi
```

### 克隆本仓库
```bash
$ fbi clone http://git.code.oa.com/sng-fe-team/fbi-data.git
```

### 安装依赖
```bash
$ fbi i
```

### 查看可用任务
```bash
$ fbi ls
```

### 执行任务.


