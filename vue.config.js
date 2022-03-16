const { defineConfig } = require('@vue/cli-service')
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath:"/",
    assetsDir:"assets",
    outputDir:process.env.VUE_APP_DIST,
    chainWebpack:config => {
        config.plugin("webpack-bundle-analyzer")
            .use(new webpackBundleAnalyzer.BundleAnalyzerPlugin({
                analyzerPort: 9999
            }))
    }
})
