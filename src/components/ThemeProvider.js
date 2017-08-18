import React from 'react';
import { ThemeProvider } from 'styled-components';
import { pastel } from '../theme';

export default props => {
  const { theme } = props;
  const mergedTheme = Object.assign(pastel, theme);
  return <ThemeProvider {...props} theme={mergedTheme} />;
};
