const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'src', 'main.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
};

module.exports = config;