import React from 'react';
import { ThemeProvider } from 'styled-components';
import { pastel } from '../theme';

export default props => <ThemeProvider theme={pastel} {...props} />;
