import glob from 'glob'
import fs from 'fs-extra'

export default async function copyOtherFiles() {
  const otFiles = glob.sync('**', {
    cwd: 'src',
    dot: true,
    nodir: true,
    ignore: ['**/*.js', '.DS_Store']
  })

  try {
    await ctx._.copyFile('package.json', ctx.options.dist + 'package.json')
    await Promise.all(otFiles.map(async item => {
      await ctx._.copyFile('src/' + item, ctx.options.dist + item)
    }))
  } catch (e) {
    throw e
  }

  ctx.log('Copy done.', 1)

  // // copy package.json
  // fs.copy('package.json', ctx.options.dist + 'package.json', function (err) {
  //   if (err) return console.error(err)
  //   ctx.log(`copied:    package.json`)
  // })

  // // copy !js files
  // otFiles.map(item => {
  //   fs.copy('src/' + item, ctx.options.dist + item, function (err) {
  //     if (err) return console.error(err)
  //     ctx.log(`copied:    ${ctx.options.dist+ item}`)
  //   })
  // })
}