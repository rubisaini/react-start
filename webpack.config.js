/**
 * Created by intelligrape on 25/4/17.
 */
const config = {
    entry: './main.js',
    output: {
        filename: './index.js'
    },
    devServer: {
        port: 3004,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

module.exports = config;