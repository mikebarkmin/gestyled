![gestyled](docs/gestyled.png)

A React UI component library based on [styled-components](http://styled-components.com). 🕶️

![Build Status](https://travis-ci.org/mikebarkmin/gestyled.svg?branch=master) ![Dependency Status](https://david-dm.org/mikebarkmin/gestyled.svg)

```sh
npm install --save gestyled
# or if you're using yarn
yarn add gestyled
```

## Usage

```javascript
import React from 'react';
import { Button } from 'gestyled';

const App = props => (
    <Button>Press me!</Button>
);
```

## Component Showcase

**See all components with possible props at [projects.barkmin.eu/gestyled](http://projects.barkmin.eu/gestyled)!**

## Base Props
All components are wrapped in a higher order component that handles design-system-based repsonsive style props using [styled-system](https://github.com/jxnblk/styled-system).

This idea is based on jxnblk's awesome functional React UI component library [rebass](https://github.com/jxnblk/rebass), which is also based on [styled-components](http://styled-components.com).

## Theme Support
You can use the styled-component ThemeProvider to theme the components. A default pastel theme can be found [here](src/theme/pastel.js). This theme is also used, when no other theme is provided.

## Licence

Copyright © 2017 Mike Barkmin. Licensed under the MIT License, see [LICENSE.md](LICENSE.md) for more information!  

