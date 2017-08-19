import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';
import { withTheme } from 'styled-components';

const StyledDivider = styled.hr`
  height: 1px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  margin: ${props => (props.insert ? '0px 0px 0px 72px' : '')};
`;

const Divider = props => <StyledDivider {...props} />;

export default withStyle(withTheme(Divider));
