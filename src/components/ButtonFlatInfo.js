import React from 'react';
import { withTheme } from 'styled-components';
import ButtonFlat from './ButtonFlat';

/**
 * See ButtonFlat for possible props.
 */
const ButtonFlatInfo = props => {
  const { theme } = props;
  const color = theme.colors.info;
  return <ButtonFlat color={color} {...props} />;
};

export default withTheme(ButtonFlatInfo);
