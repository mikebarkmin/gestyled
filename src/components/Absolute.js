import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import withStyle from "./Base";

const StyledAbsolute = styled.div`
  position: absolute;
  right: ${props => (props.right ? 0 : "null")};
  left: ${props => (props.left ? 0 : "null")};
  top: ${props => (props.top ? 0 : "null")};
  bottom: ${props => (props.bottom ? 0 : "null")};
`;

const Absolute = props => <StyledAbsolute {...props} />;

Absolute.propTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

export default withStyle(Absolute);
