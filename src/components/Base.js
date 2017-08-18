import React from 'react';
import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import { oneOfType, number, string, arrayOf } from 'prop-types';
import { pastel } from '../theme';

const prop = oneOfType([number, string, arrayOf(oneOfType([number, string]))]);

const propTypes = {
  width: prop,
  w: prop,
  fontSize: prop,
  f: prop,
  color: prop,
  bg: prop,
  m: prop,
  mt: prop,
  mr: prop,
  mb: prop,
  ml: prop,
  mx: prop,
  my: prop,
  p: prop,
  pt: prop,
  pr: prop,
  pb: prop,
  pl: prop,
  px: prop,
  py: prop
};

const withStyle = Component => {
  const Base = styled(Component)([], space, width, fontSize, color, props => {
    const { theme } = props.theme;
    return {
      transition: theme ? theme.transition : pastel.transition,
      fontFamily: theme ? theme.fontFamily : pastel.fontFamily
    };
  });

  Base.propTypes = propTypes;

  return Base;
};

export default withStyle;
