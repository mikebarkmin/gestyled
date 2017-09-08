import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledBadge = withStyle(styled.span`
  min-width: 3rem;
  padding: 0 6px;
  margin-left: 14px;
  text-align: center;
  line-height: 22px;
  height: 22px;
  float: right;
  color: white;
  background-color: lightgrey;
  border-radius: 2px;
  box-sizing: border-box;
`);

const Badge = props => <StyledBadge fontSize={0} {...props} />;

export default Badge;
