var htmlWebpackPlugin = require('html-webpack-plugin');


const path = require('path');

module.exports={

    entry: './src/app.js',

    output:{

        path:path.resolve(__dirname, 'dist'),
        filename:'js/[name].bundle.js'
        // publicPath:'http://cdn.com/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:__dirname+'/node_modules/',
                include:__dirname+'/src/',
                options: {
                    'presets': ['es2017']
                }
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body'
        })


    ]
}

// module.exports=config;