module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nothing-test/'
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
