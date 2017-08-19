import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import { darken, transparentize } from 'polished';
import withStyle from './Base';

const StyledButton = styled.button.attrs({
  type: 'button'
})`
  display: inline-block;
  cursor: pointer;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights[2]};
  text-transform: uppercase;
  user-select: none;
  background-color: lightgrey;
  color: ${props => props.theme.colors.text};
  line-height: 1.4;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border: 1px solid transparent;
  text-align: center;
  width: ${props => (props.full ? '100%' : 'auto')};

  &:hover:enabled {
    background-color: ${props => darken(0.07, props.bg)};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
    background-color: ${props => transparentize(0.5, props.bg)};
    color: ${props => transparentize(0.5, props.color)};
  }
`;

/**
 * A basic button.
 */
const Button = props => <StyledButton {...props} />;

Button.propTypes = {
  /** Span the full width of a parent */
  full: PropTypes.bool,
  /** Set the background-color */
  bg: PropTypes.string,
  /** Set the font-color */
  color: PropTypes.string,
  /** Set disabled */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  full: false,
  bg: 'lightgrey',
  color: 'black',
  disabled: false
};

export default withStyle(Button);
