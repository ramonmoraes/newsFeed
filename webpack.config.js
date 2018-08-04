const path = require('path');

module.exports = {
  entry: {
      bundle: './src/index.js',
      sw: './src/serviceWorker/register.js',
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};