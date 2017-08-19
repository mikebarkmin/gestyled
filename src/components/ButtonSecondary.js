import React from 'react';
import { withTheme } from 'styled-components';
import Button from './Button';
import { getColorFromKey } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonSecondary = props => {
  const { theme } = props;
  const bg = theme.colors.secondary;
  const color = theme.colors.secondaryText;
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonSecondary);
