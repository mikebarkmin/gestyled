import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Label = props => <StyledLabel {...props} />;

export default withStyle(Label);
