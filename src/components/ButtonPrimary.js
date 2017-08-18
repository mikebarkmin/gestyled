import React from 'react';
import { withTheme } from 'styled-components';
import Button from './Button';
import { getColorFromKey } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonPrimary = props => {
  const { theme } = props;
  const bg = getColorFromKey(theme, 'primary');
  const color = getColorFromKey(theme, 'primaryText');
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonPrimary);
