import React from 'react';
import Button from './Button';
import { withTheme } from 'styled-components';

/**
 * See Button for possible props.
 */
const ButtonSuccess = props => {
  const { theme } = props;
  const bg = theme.colors.success;
  const color = theme.colors.successText;
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonSuccess);
