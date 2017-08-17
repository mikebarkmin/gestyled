import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import { darken, transparentize } from "polished";

const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  user-select: none;
  background-color: lightgrey;
  color: black;
  line-height: 1.4;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 4px;
  border: 1px solid transparent;
  text-align: center;

  width: ${props => (props.full ? "100%" : "auto")};

  &:hover:enabled {
    background-color: ${props => darken(0.05, props.bg)};
  }

  &:disabled {
    cursor: default;
    background-color: ${props => transparentize(0.5, props.bg)};
    color: ${props => transparentize(0.5, props.color)};
  }

  ${space} ${width} ${fontSize} ${color};
`;

/**
 * A basic button.
 * 
 * @class Button
 * @extends {React.Component}
 */
class Button extends React.Component {
  static propTypes = {
    /** Span the full width of a parent */
    full: PropTypes.bool,
    /** Set the background-color */
    bg: PropTypes.string,
    /** Set the font-color */
    color: PropTypes.string,
    /** Set disabled */
    disabled: PropTypes.bool
  };
  static defaultProps = {
    full: false,
    bg: "lightgrey",
    color: "black",
    disabled: false
  };
  render() {
    return <StyledButton {...this.props} />;
  }
}

export default Button;
