const { createConfig, babel } = require("webpack-blocks");
module.exports = {
  webpackConfig: createConfig([babel()])
};
