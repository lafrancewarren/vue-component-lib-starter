module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/variables.scss"`,
      },
      scss: {
        prependData: `@import "~@/assets/styles/variables.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.externals({
      moment: 'moment'
    })
  }
}