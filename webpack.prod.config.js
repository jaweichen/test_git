var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var merge=require('webpack-merge');
var webpackBaseConfig=require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//清空基本設定的外掛程式清單
webpackBaseConfig.plugins=[];

module.exports=merge(webpackBaseConfig,{
    output:{
        publicPath:'./dist/',
        //將入口檔案重新命名為帶有20位hash值得唯一檔案
        filename:'[name].[hash].js'
    },
    plugins:[
        new ExtractTextPlugin({
            //分析css,並重新命名為帶有20位hash值得唯一檔案
            filename:'[name].[hash].css',
            allChunks:true
        }),
        //定義目前 node 環境為生產環境
        new webpack.DefinePlugin({
            'progress.env':{
                NODE_ENV:'"production"'
            }
        }),
        //壓縮js
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
               
              }
        }),
        //分析範本,並儲存入口 html 檔案
        new HtmlwebpackPlugin({
            filename:'./index_prod.html',
            template:'./index.ejs',
            inject:false
        }),
        new VueLoaderPlugin()
    ]/*,
    optimization:{
        minimizer:[
            new UglifyJsPlugin({

            })
        ]
    }*/
})