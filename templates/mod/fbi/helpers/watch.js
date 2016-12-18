import path from 'path'
import watch from 'watch'
import complier from './complier'

export default () => watch.watchTree('src/', {
  interval: ctx.options.watchDelay
}, (f, curr, prev) => {
  if (typeof f == 'object' && prev === null && curr === null) {
    // Finished walking the tree, complie all
    // complier()
  } else if (prev === null) {
    // f is a new file, complie all
    complier()
  } else if (curr.nlink === 0) {
    // f was removed, complie all
    complier()
  } else {
    // f was changed
    if (path.extname(f) === '.js') {
      // f is js, complie it
      complier(f)
    } else {
      // f is not js, complie all
      complier()
    }
  }
})