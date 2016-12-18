import copy from './helpers/copy'
import clean from './helpers/clean'
import watch from './helpers/watch'
import complier from './helpers/complier'
import nodemon from 'nodemon'

// start server
function startServer() {
  nodemon(`${ctx.options.mainFile} --config fbi/config/nodemon.json`)

  nodemon
    .on('start', () => {
      ctx.log('Service started', 0)
    })
    .on('quit', () => {
      ctx.log('Service quit', -1)
    })
    .on('restart', files => {
      ctx.log(`Service restarted`, 0)
    })
    .on('crash', () => {
      ctx.log('Service crashed for some reason', -2)
    })
}

clean()
complier()
copy()
watch()
startServer()