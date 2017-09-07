import React from 'react';
import { withTheme } from 'styled-components';
import ButtonFlat from './ButtonFlat';

/**
 * See ButtonFlat for possible props.
 */
const ButtonFlatPrimary = props => {
  const { theme } = props;
  const color = theme.colors.primary;
  return <ButtonFlat color={color} {...props} />;
};

export default withTheme(ButtonFlatPrimary);
