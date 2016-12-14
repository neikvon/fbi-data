const rollup = require('rollup-endpoint')
const path = require('path')
const express = require('express')
const app = express()
const vue = require('rollup-plugin-vue2')
const postcss = require('rollup-plugin-postcss')


const rollupOptions = {
  entry: process.cwd() + '/src/main.js',
  generateOptions: {
    sourceMap: true, // defaults to `false` in production
  },
  plugins: [
    postcss(),
    // vue(),
    // require('rollup-plugin-buble')()
  ]
}

app.use(express.static(path.join(process.cwd(), 'src')))

app.get('/assets/app.js', rollup.serve(rollupOptions))

app.listen(3000)
ctx.log('Listening on http://localhost:3000', 1)