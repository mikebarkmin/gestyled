const { createConfig, babel } = require('webpack-blocks');
const path = require('path');
module.exports = {
  webpackConfig: createConfig([babel()]),
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from 'gestyled';`;
  }
};
