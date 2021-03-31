const {
    join
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = (env) => {
    const mode = 'production' === process.env.NODE_ENV ? 'production' : 'development';
    return {
        mode,
        entry: join(__dirname, 'src', 'index.js'),
        output: {
            path: join(__dirname, 'dist'),
            filename: 'app.bundle.[hash].js',
        },
        devServer: {
            contentBase: join(__dirname, 'dist'),
            compress: true,
            port: 9000,
           
            historyApiFallback: true
        },
        module: {
            rules: [{
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css'
            }),
            new HtmlWebpackPlugin({
                template: join(__dirname, 'src', 'html', 'index.html'),
                publicPath: '/',
            }),
        ]
    }
}