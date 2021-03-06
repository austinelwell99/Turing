const path = require(`path`);

const entryPoint = path.join(__dirname, `./client/src/index.jsx`);
const exitPoint = path.join(__dirname, `./client/dist`);

module.exports = {
  entry: entryPoint,
  mode: `development`,
  output: {
    filename: `bundle.js`,
    path: exitPoint,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
