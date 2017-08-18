import React from 'react';
import { withTheme } from 'styled-components';
import Button from './Button';
import { getColorFromKey } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonWarning = props => {
  const { theme } = props;
  const bg = getColorFromKey(theme, 'warning');
  const color = getColorFromKey(theme, 'white');
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonWarning);
