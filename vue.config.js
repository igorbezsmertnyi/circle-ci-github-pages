const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? process.env.BASE_URL : '/'

module.exports = {
  baseUrl: baseUrl,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = 'public/index.html'
        return args 
      })
  }
}