const path = require('path');
module.exports = {
  entry: './src/js/app.js', // 这里应用程序开始执行,webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    filename: 'bundle.js',//输出资源块的名字(asset chunk)
    path: path.resolve(__dirname, 'dist/js') // 所有输出文件的目标路径,我的就是./dist/bundle.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        },  {loader: "css-loader",options: { importLoaders: 1 }
        },{
          loader: "postcss-loader" // translates CSS into CommonJS
      },{
            loader: "sass-loader" // compiles Sass to CSS
        }
    ]
  }
    ]
 } 
}