const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        auth: 'auth@http://localhost:3001/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ]
}

module.exports = merge(commonConfig, devConfig)
