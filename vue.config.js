const settings = require('./src/settings.js')
const publicPath = settings.publicPath || '/'
const name = settings.title || 'front-end-template'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  publicPath,
  assetsDir: 'static',
  outputDir: 'docs',
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
