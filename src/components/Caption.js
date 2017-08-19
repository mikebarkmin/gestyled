import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledCaption = styled.span`
  color: ${props => props.theme.colors.caption};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[0]}px;
`;

const Caption = props => <StyledCaption {...props} />;

export default withStyle(Caption);
