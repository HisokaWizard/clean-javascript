const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    watchOptions: {
        ignored: ['node_modules']
    },
    mode: 'production',
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: { sourceMap: false }
            },
            {
              loader: 'css-loader',
              options: { sourceMap: false }
            }
          ],
        }
      ]
    }
};