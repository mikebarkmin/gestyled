import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import { darken, transparentize } from "polished";
import Button from "./Button";

const StyledButtonDefault = styled(Button)`
  background-color: white;
  border: 1px solid;
  border-color: ${props => props.bg};

  &:hover:enabled {
    color: white;
  }
`;

/**
 * A basic button.
 */
const ButtonDefault = props => <StyledButtonDefault {...props} />;

ButtonDefault.propTypes = {
  /** Span the full width of a parent */
  full: PropTypes.bool,
  /** Set the background-color */
  bg: PropTypes.string,
  /** Set the font-color */
  color: PropTypes.string,
  /** Set disabled */
  disabled: PropTypes.bool
};

ButtonDefault.defaultProps = {
  full: false,
  bg: "lightgrey",
  color: "black",
  disabled: false
};

export default ButtonDefault;
