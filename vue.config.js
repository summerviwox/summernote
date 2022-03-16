const { defineConfig } = require('@vue/cli-service')
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath:"/",
    assetsDir:"assets",
    outputDir:process.env.VUE_APP_DIST,
    lintOnSave:false,
    chainWebpack:config => {
        config.optimization.delete("splitChunks")
        config.plugin("webpack-bundle-analyzer")
            .use(new webpackBundleAnalyzer.BundleAnalyzerPlugin({
                analyzerPort: 9999
            }))
        config.plugin('compressionPlugin')
            .use(new CompressionPlugin({
                test:/\.(js)(\?.*)?$/i,
                threshold: 1024,
                deleteOriginalAssets: false
            }))
    },
    devServer:{
        port:8888,
    },
    configureWebpack:{
        externals:{
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            "element-ui":"ELEMENT",
            mymarkdownit:"markdownit",
            myhljs:"hljs",
            md5:"md5",
            echarts:"echarts",
            BMapGL:"BMapGL",
            BMap:"BMap",
            VueCodemirror:"VueCodemirror",
            "dateFns":"dateFns",
            axios:"axios",
        }
    }
})
