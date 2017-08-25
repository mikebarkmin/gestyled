import React from 'react';
import { withTheme } from 'styled-components';
import Button from './Button';

/**
 * See Button for possible props.
 */
const ButtonInfo = props => {
  const { theme } = props;
  const bg = theme.colors.info;
  const color = theme.colors.infoText;
  return <Button bg={bg} color={color} {...props} />;
};

export default withTheme(ButtonInfo);
