import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';

const StyledFixed = styled.div`
  position: fixed;
  top: ${props => (props.top ? 0 : null)};
  right: ${props => (props.right ? 0 : null)};
  left: ${props => (props.left ? 0 : null)};
  bottom: ${props => (props.bottom ? 0 : null)};
  z-index: ${props => props.z};
`;

const Fixed = props => <StyledFixed {...props} />;

Fixed.propTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  z: PropTypes.number
};

export default withStyle(Fixed);
