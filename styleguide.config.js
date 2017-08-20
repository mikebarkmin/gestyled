const { createConfig, babel } = require('webpack-blocks');
const path = require('path');
module.exports = {
  webpackConfig: createConfig([babel()]),
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from 'gestyled';`;
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper')
  },
  sections: [
    {
      name: 'Documentation',
      content: 'docs/documentation.md',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md'
        },
        {
          name: 'Base Props',
          content: 'docs/base_props.md'
        },
        {
          name: 'Theming',
          content: 'docs/theming.md'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/*.js'
    },
    {
      name: 'Animations',
      content: 'docs/animations.md'
    }
  ]
};
