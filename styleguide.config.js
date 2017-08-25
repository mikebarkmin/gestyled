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
      name: 'Components',
      content: 'src/components/index.md',
      components: 'src/components/*.js'
    },
    {
      name: 'Animations',
      content: 'src/animations/index.md',
      sections: [
        {
          name: 'Hover',
          content: 'src/animations/hover/index.md'
        }
      ]
    },
    {
      name: 'Themes',
      content: 'src/themes/index.md'
    }
  ]
};
