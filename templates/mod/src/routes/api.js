import Router from 'koa-router'
import requireDirectory from 'require-directory'

const ctrls = requireDirectory(module, '../controllers')

export default class ApiRouter {

  constructor() {
    this.router = new Router({
      prefix: '/api'
    })
    this.onRoutes()
  }

  onRoutes() {
    // 所有controllers文件夹下暴露的api都默认支持GET和POST方式
    // 请在api内部处理不支持的情况
    this.router
      .get('/:apiModule/:apiName', async(ctx, next) => {
        return ctrls[ctx.params.apiModule][ctx.params.apiName](ctx, next)
      })
      .post('/:apiModule/:apiName', async(ctx, next) => {
        return ctrls[ctx.params.apiModule][ctx.params.apiName](ctx, next)
      })
  }

}