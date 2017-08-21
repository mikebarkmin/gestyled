import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';
import { transparentize } from 'polished';

const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 2px solid
    ${props =>
      transparentize(
        props.error || props.hint ? 0.8 : 0.5,
        props.indicatorColor
      )};
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${props => props.indicatorColor};
  }
`;

const Textarea = ({ error, hint, ...props }) => {
  let indicatorColor = props.indicatorColor;
  if (error) {
    indicatorColor = props.theme.colors.error;
  } else if (hint) {
    indicatorColor = props.theme.colors.warning;
  }
  return <StyledTextarea {...props} indicatorColor={indicatorColor} />;
};

Textarea.propTypes = {
  indicatorColor: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  hint: PropTypes.bool,
  hintText: PropTypes.string
};

Textarea.defaultProps = {
  indicatorColor: 'lightgrey'
};

export default withTheme(withStyle(Textarea));
