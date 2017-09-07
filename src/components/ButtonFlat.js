import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import { darken, transparentize } from 'polished';
import withStyle from './Base';

const StyledButtonFlat = withStyle(styled.button.attrs({
  type: 'button'
})`
  display: inline-block;
  cursor: pointer;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights[2]};
  text-transform: uppercase;
  user-select: none;
  background: none;
  color: ${props => props.theme.colors.text};
  line-height: 1.4;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 2px;
  box-shadow: ${props => props.theme.shadowLevels[props.level]};
  border: 1px solid transparent;
  text-align: center;
  width: ${props => (props.full ? '100%' : 'auto')};

  &:hover:enabled {
    color: ${props => darken(0.07, props.color)};
  }

  &:focus {
    outline: none;
  }

  &:active:enabled {
    background: ${props => transparentize(0.8, props.color)};
  }

  &:disabled {
    cursor: default;
    color: ${props => transparentize(0.5, props.color)};
  }
`);

/**
 * A flat button.
 */
const ButtonFlat = props => <StyledButtonFlat {...props} />;

ButtonFlat.propTypes = {
  /** Span the full width of a parent */
  full: PropTypes.bool,
  /** Set the font-color */
  color: PropTypes.string,
  /** Set disabled */
  disabled: PropTypes.bool,
  /** Shadow level */
  level: PropTypes.number
};

ButtonFlat.defaultProps = {
  full: false,
  color: 'black',
  disabled: false,
  level: -1
};

export default withStyle(ButtonFlat);
