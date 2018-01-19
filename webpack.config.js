var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const proxies = {
    local: {
        '/rest': {
            target: 'http://localhost:1080/index.php',
            pathRewrite: {'^/rest' : ''}
        }
    },
    sandbox: {
        '/rest': {
            target: 'https://sandbox.crmsponsoren.fcknutwil.ch',
            changeOrigin: true
        }
    }
};

module.exports = env => {
    return {
        entry: {
            app: path.resolve(__dirname, 'src', 'main.ts'),
            vendor: path.resolve(__dirname, 'src', 'vendor.ts'),
            polyfills: path.resolve(__dirname, 'src', 'polyfills.ts'),
            sass: path.resolve(__dirname, 'src', 'style.scss')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    loader: 'tslint-loader',
                    options: {/* Loader options go here */}
                },
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                }, {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader" // creates style nodes from JS strings
                        }, {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                }, {
                    test: /\.(html)$/,
                    use: 'html-loader'
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfills']
            }),

            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.template.html')
            }),

            new CopyWebpackPlugin([{from: path.join(__dirname, "static"), to: path.join(__dirname, "dist")}])

        ],
        devtool: "source-map",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000,
            historyApiFallback: true,
            proxy: proxies[env.proxy]
        }
    }
};
