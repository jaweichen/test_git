var path=require('path');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var config={
    entry:{
        main:'./main'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',
        filename:'[name].js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader:'url-loader?limit=1024'//?limit=1024是指如果這個檔案小於1kb,就以 base64 的形式載入,不會產生一個檔案
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new ExtractTextPlugin({
            filename:'[name].css',
            allChunks:true
        })
    ],
    devtool:'source-map'
}

module.exports=config;