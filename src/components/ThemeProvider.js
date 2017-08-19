import React from 'react';
import { ThemeProvider } from 'styled-components';
import { material } from '../theme';
import merge from 'lodash.merge';

export default props => {
  return <ThemeProvider {...props} theme={merge({}, material, props.theme)} />;
};
