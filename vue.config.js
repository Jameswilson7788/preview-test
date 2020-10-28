module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/preview-test/'
    : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
