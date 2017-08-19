import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledHeadline = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[4]}px;
`;

const Headline = props => <StyledHeadline {...props} />;

export default withStyle(Headline);
