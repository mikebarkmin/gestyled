import React from 'react';
import Button from './Button';
import { pastel } from '../theme';

/**
 * See Button for possible props.
 */
const ButtonInfo = props => {
  const { theme } = props;
  const bg = theme ? theme.info : pastel.info;
  const color = 'white';
  return <Button bg={bg} color={color} {...props} />;
};

export default ButtonInfo;
