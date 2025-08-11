const path = require("path");
let stylePath = path.resolve(__dirname, "src/styles/variables.less");

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "${path
            .resolve(process.cwd(), "./src")
            .replace(/\\/g, "\\\\")}/uni.less";`,
        },
      },
    },
  },
};
