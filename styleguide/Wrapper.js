import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';

const Wrapper = props =>
  <ThemeProvider>
    {props.children}
  </ThemeProvider>;

export default Wrapper;
