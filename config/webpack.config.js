var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log('Current Entry:' + path.resolve(process.cwd(), "src", "index.js"));
module.exports = {
  entry: path.resolve(process.cwd(), "src", "index.js"),
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: 'static/js/[name].[contenthash:8].js',
    clean: true, // clear the last packaging content;
    publicPath: './',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        // test: /\.js[x]?$/, // 设置所匹配要解析的文件
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                // useBuiltIns 有三个值
                // false：不对polyfill做操作。
                // entry：根据配置的浏览器兼容, 引入浏览器不兼容的 polyfill。需要在入口处手动引入polyfill
                // usage：根据配置的浏览器兼容,及代码中使用到的高级语法按需求引入polyfill
                useBuiltIns: 'usage',
                corejs: 3 // core-js的使用版本
              }],
              '@babel/preset-react', // 解析
            ]
          },
        },
        exclude: /node_modules/, // 一般依赖已经经过转换，所以排除安装的依赖包，只转换我们自己的代码提高速度。
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        /*
          type有四个值
          1、asset/resource 构建一个单独的文件并导出url
          2、asset/inline 资源转成base64格式嵌入到代码中
          3、asset/source 带出资源的源代码
          4、asset 根据设置导出url还是转成base64格式嵌入到代码中
        */
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 650 * 1024, // 小于650kb转base64 (正常情况下10kb左右下的会转成base64)
          }
        },
        generator: {
          filename: 'static/images/[name].[contenthash:8].[ext]', // 文件输出目录和命名
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my title",
      filename: "index.html",
      template: path.resolve(process.cwd(), "index.html"),
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "theme-color": "#4285f4",
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx','.json'],
  },
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    static: {
      directory: path.resolve(process.cwd(), "dist"),
    },
  },
};