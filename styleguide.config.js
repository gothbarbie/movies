module.exports = {
  webpackConfig: require('./config/webpack.config.dev.js'),
  components: 'src/components/**/*.js',
  ignore: ['**/*.spec.js', '**/index.js'],
}
