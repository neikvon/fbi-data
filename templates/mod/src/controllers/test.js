/**
 * 该controller提供api给客户端ajax用
 */
export default {
  async a(ctx) {
    if (ctx.method !== 'GET') {
      ctx.body = {
        code: -1,
        message: 'this api only support GET method.'
      }
      return
    }

    ctx.body = {
      code: 1,
      msg: 'success'
    }
  }

}
