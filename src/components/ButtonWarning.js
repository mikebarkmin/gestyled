import React from 'react';
import { withTheme } from 'styled-components';
import Button from './Button';

/**
 * See Button for possible props.
 */
const ButtonWarning = props => {
  const { theme } = props;
  const bg = theme.colors.warning;
  const color = theme.colors.warningText;
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonWarning);
