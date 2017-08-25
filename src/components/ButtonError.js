import React from 'react';
import { withTheme } from 'styled-components';
import Button from './Button';

/**
 * See Button for possible props.
 */
const ButtonError = props => {
  const { theme } = props;
  const bg = theme.colors.error;
  const color = theme.colors.errorText;
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonError);
