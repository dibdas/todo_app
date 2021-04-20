const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        // test: /\.js$/,
        // exclude: /node_modules/,
        // use: ['babel-loader'],
      },
    ],
  }
  // module: {
  // rules: [
  // {
  //   test: /\.m?js$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: "babel-loader",
  //     options: {
  //       presets: ['@babel/preset-env']
  //     }
  //   }
  // }
  //   {
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     use: ['babel-loader'],
  //   }
  // ]
  // }
};