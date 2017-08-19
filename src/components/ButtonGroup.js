import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  & > * {
    border-radius: 0;
  }
  & > *:first-child {
    border-radius: 2px 0 0 2px;
  }
  & > *:last-child {
    border-radius: 0 2px 2px 0;
  }
`;

const ButtonGroup = props => <StyledButtonGroup {...props} />;

export default ButtonGroup;
