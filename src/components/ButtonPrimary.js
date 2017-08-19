import React from 'react';
import { withTheme } from 'styled-components';
import Button from './Button';
import { getColorFromKey } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonPrimary = props => {
  const { theme } = props;
  const bg = theme.colors.primary;
  const color = theme.colors.primaryText;
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonPrimary);
