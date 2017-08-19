import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledPre = styled.pre``;

const Pre = props => <StyledPre {...props} />;

export default withStyle(Pre);
