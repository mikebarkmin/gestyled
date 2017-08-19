import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledText = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[1]}px;
`;

const Text = props => <StyledText {...props} />;

export default withStyle(Text);
