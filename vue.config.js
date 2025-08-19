const path = require("path");
let stylePath = path.resolve(__dirname, "src/styles/variables.less");

module.exports = {
  transpileDependencies: ["@dcloudio/uni-ui"], // 如果需要编译 uni-ui
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  // 全局变量/混入（可选）
                  globalVars: {
                    "primary-color": "#007AFF", // 示例变量
                  },
                },
              },
            },
          ],
        },
      ],
    },
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //       modifyVars: {
  //         hack: `true; @import "${path
  //           .resolve(process.cwd(), "./src")
  //           .replace(/\\/g, "\\\\")}/uni.less";`,
  //       },
  //     },
  //   },
  // },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#007AFF", // 全局变量
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
