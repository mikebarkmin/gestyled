import React from 'react';
import FloatingActionButton from './FloatingActionButton';
import { withTheme } from 'styled-components';

const FloatingActionButtonSecondary = props => {
  const { theme } = props;
  const bg = theme.colors.secondary;
  const color = theme.colors.secondaryText;
  return <FloatingActionButton bg={bg} color={color} {...props} />;
};

export default withTheme(FloatingActionButtonSecondary);
