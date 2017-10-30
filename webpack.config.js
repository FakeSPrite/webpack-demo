var htmlWebpackPlugin = require('html-webpack-plugin');


const path = require('path');

module.exports={

    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },

    output:{

        path:path.resolve(__dirname, 'dist'),
        filename:'js/[name]-[chunkhash].js',
        // publicPath:'http://cdn.com/'
    },


    plugins:[
        new htmlWebpackPlugin(
            {
                filename:'index.html',
                template:'index.html',
                inject:'head',
                title:'webpack is good',
                date:new Date()
            }
        )
    ]

}

// module.exports=config;