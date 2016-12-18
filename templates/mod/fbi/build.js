import copy from './helpers/copy'
import clean from './helpers/clean'
import complier from './helpers/complier'

process.env.NODE_ENV = 'production'

;
(async() => {
  await clean()
  await complier()
  await copy()
})()