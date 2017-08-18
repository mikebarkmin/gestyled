import React from 'react';
import Button from './Button';
import { pastel } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonPrimary = props => {
  const { theme } = props;
  const bg = theme ? theme.primary : pastel.primary;
  const color = theme ? theme.primaryText : pastel.primaryText;
  return <Button bg={bg} color={color} {...props} />;
};

export default ButtonPrimary;
