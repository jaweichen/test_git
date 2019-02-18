const path=require("path");
const ExtractTextPlugin=require("extract-text-webpack-plugin");

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
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename:"[name].css",
            allChunks:true
        })
    ]
}