import React from 'react';
import Button from './Button';
import { withTheme } from 'styled-components';
import { getColorFromKey } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonSuccess = props => {
  const { theme } = props;
  const bg = getColorFromKey(theme, 'success');
  const color = getColorFromKey(theme, 'white');
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonSuccess);
