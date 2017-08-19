import React from 'react';
import FloatingActionButton from './FloatingActionButton';
import { withTheme } from 'styled-components';

const FloatingActionButtonPrimary = props => {
  const { theme } = props;
  const bg = theme.colors.primary;
  const color = theme.colors.primaryText;
  return <FloatingActionButton bg={bg} color={color} {...props} />;
};

export default withTheme(FloatingActionButtonPrimary);
