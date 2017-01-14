// see http://vuejs-templates.github.io/webpack for documentation.

// 使用 NodeJS 自带的文件路径插件
var path = require('path')

module.exports = {
  // production 环境
  build: {
    // 使用 config/prod.env.js 中定义的编译环境
    env: require('./prod.env'),
    // 编译输入的 index.html 文件
    index: path.resolve(__dirname, '../dist/index.html'),
    // 编译输出的静态资源根路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 编译输出的二级目录
    assetsSubDirectory: 'static',
    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: '/',
    // 是否开启 cssSourceMap
    productionSourceMap: true,
    // 是否开启 gzip
    productionGzip: false,
    // 需要使用 gzip 压缩的文件扩展名
    productionGzipExtensions: ['js', 'css']
  },
  // dev 环境
  dev: {
    // 使用 config/dev.env.js 中定义的编译环境
    env: require('./dev.env'),
    // 运行测试页面的端口
    port: 8080,
    // 编译输出的二级目录
    assetsSubDirectory: 'static',
    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: '/',
    // 需要 proxyTable 代理的接口（可跨域）
    // 
    // 后台接口：
    // http://picup.gpsoo.net/1/picture?method=upload
    // 
    // 调用实例
    // this.$http.get('/api/1/picture?method=upload', {
    //   params: {
    //     id: '123'
    //   }
    // })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch(function(error) {
    //     console.log(error);
    //   });
    proxyTable: {
      // '/api': {
      //   target: 'http://picup.gpsoo.net',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // }
    },
    // 是否开启 cssSourceMap
    cssSourceMap: false
  }
}
