import React from 'react';
import { withTheme } from 'styled-components';
import ButtonFlat from './ButtonFlat';

/**
 * See ButtonFlat for possible props.
 */
const ButtonFlatSecondary = props => {
  const { theme } = props;
  const color = theme.colors.secondary;
  return <ButtonFlat color={color} {...props} />;
};

export default withTheme(ButtonFlatSecondary);
