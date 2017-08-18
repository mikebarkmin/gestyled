import React from 'react';
import Button from './Button';
import { pastel } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonError = props => {
  const { theme } = props;
  const bg = theme ? theme.error : pastel.error;
  const color = 'white';
  return <Button bg={bg} color={color} {...props} />;
};

export default ButtonError;
