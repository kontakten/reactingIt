var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Bundled HTML',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.ejs',
        })
    ]
}