// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('webpack-merge')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsImportPluginFactory = require('ts-import-plugin')

const lastArgv = process.argv.slice(-1)[0] // 获取node最后一个命令参数
const TEST_SIT = process.env.TEST_SIT
let sitEnv = `sit${TEST_SIT}` // 默认
if (lastArgv.indexOf('--sit=') === 0) {
  sitEnv = `sit${lastArgv.split('=')[1]}`
}

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  outputDir: process.env.VUE_APP_OUTPUT_DIR,

  devServer: {
    proxy: {
      '/api-faceid': {
        // 图片上传接口代理
        target: 'https://faceid-sit2.fcbox.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 重写路径
          '^/api-faceid': ''
        }
      },
      '/wxgw': {
        target: `https://internetweb-${sitEnv}.fcbox.com/`,
        ws: true,
        changeOrigin: true
      },
      '/dropbox': {
        target: `https://internetweb-${sitEnv}.fcbox.com`,
        ws: true,
        changeOrigin: true
      }
    }
  },

  lintOnSave: true,

  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  }
}
