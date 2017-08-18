import React from 'react';
import styled from 'styled-components';

const StyledCode = styled.code`white-space: pre-wrap;`;

const Code = props => <StyledCode {...props} />;

export default Code;
