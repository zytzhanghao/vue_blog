const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://172.23.4.226:7300/mock/5dbbf9c30680d83e76c29c74',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    proxyTable: {
      '/api': {
        target: 'http://172.23.4.226:7300/mock/5dad28e701943719ee21cd48/arm/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
