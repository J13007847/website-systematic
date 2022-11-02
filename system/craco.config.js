const path = require("path");
const CracoLessPlugin = require("craco-less");
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  babel: {
    //支持装饰器
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true, //设置为true即是less 这里用的是css
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // "@primary-color": "rgba(255,192,203,0.68)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
