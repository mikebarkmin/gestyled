import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid lightgrey;
  display: flex;

  &:focus {
    outline: none;
    border-bottom: 2px solid dimgrey;
  }
`;

const Input = props => <StyledInput {...props} />;

export default withStyle(Input);
