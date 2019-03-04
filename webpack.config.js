const path=require("path");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const VueLoaderPlugin=require("vue-loader/lib/plugin");

module.exports={
    entry:{
        main:"./main.js"
    },
    output:{
        filename:"main.js",
        publicPath:"./dist/",
        path:path.join(__dirname,"./dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:"css-loader",
                    fallback:"style-loader"
                })
            },
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
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename:"[name].css",
            allChunks:true
        }),
        new VueLoaderPlugin()
    ]
}