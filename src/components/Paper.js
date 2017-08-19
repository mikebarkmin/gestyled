import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';

const StyledPaper = styled.div`
  box-shadow: ${props => props.shadow};
  border-radius: ${props => props.borderRadius};
  display: inline-block;
  box-sizing: border-box;
`;

const Paper = props => {
  const { level, theme } = props;
  let shadow = theme.shadowLevels[level];
  let borderRadius = '2px';
  if (props.circle) {
    borderRadius = '50%';
  }
  if (props.squared) {
    borderRadius = 'none';
  }
  return <StyledPaper shadow={shadow} borderRadius={borderRadius} {...props} />;
};

Paper.propTypes = {
  transition: PropTypes.string,
  level: PropTypes.number,
  circle: PropTypes.bool,
  squared: PropTypes.bool
};

Paper.defaultProps = {
  transition: 'none',
  level: 0,
  circle: false,
  squared: false
};

export default withStyle(withTheme(Paper));
