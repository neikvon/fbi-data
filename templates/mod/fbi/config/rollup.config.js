import buble from 'rollup-plugin-buble'
import async from 'rollup-plugin-async'
import json from 'rollup-plugin-json'
import eslint from 'rollup-plugin-eslint'
import eslintConfig from './eslint.config'
import bubleConfig from './buble.config'

export default {
  entry: 'src/index.js',
  plugins: [
    eslint(eslintConfig),
    json(),
    async(),
    buble(bubleConfig)
  ],
  onwarn: function () {}
}

/* options:

  acorn
  banner
  cache
  context
  dest
  entry
  exports
  external
  footer
  format
  globals
  indent
  interop
  intro
  legacy
  moduleContext
  moduleId
  moduleName
  noConflict
  onwarn
  outro
  paths
  plugins
  preferConst
  sourceMap
  sourceMapFile
  targets
  treeshake
  useStrict

*/
