const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx', // primeiro script executado no projeto
  output: { // onde vai gerar o bundle
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: { // extensões para dar suporte
    extensionas: ['.ts', '.tsx', '.js', '.scss'],
    alias: { // Mapear os @ feitos pelo tsconfig
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: { modules: true } // react consegue entender que ele será um modulo, para manipular com js
      },
      {
        loader: 'sass-loader'
      }]
    }]
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true // permite mapear rotas como o react-router-dom
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
