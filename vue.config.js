const path = require("path");
let stylePath = path.resolve(__dirname, "src/styles/variables.less");

module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          javascriptEnabled: true,
          hack: `true; @import "${stylePath}";`,
        },
      },
    },
  },
};
