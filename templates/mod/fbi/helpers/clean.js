import rm from 'rimraf'

function rmPromise(input) {
  return new Promise((resolve, reject) => {
    rm(input, (err, ret) => {
      return err ? reject(err) : resolve(ret)
    })
  })
}

export default async function clean() {
  try {
    await rmPromise(ctx.options.dist)
    ctx.log(`'${ctx.options.dist}' deleted.`, 1)
  } catch (err) {
    throw err
  }
}