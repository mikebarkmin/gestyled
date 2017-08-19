import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledTitle = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[2]};
  font-size: ${props => props.theme.fontSizes[3]}px;
`;

const Title = props => <StyledTitle {...props} />;

export default withStyle(Title);
