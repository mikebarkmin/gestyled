import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';
import Container from './Container';

const StyledCardActions = styled(Container).attrs({
  p: 1
})`
  > * {
    margin-right: 8px;
  }
  > *:last-child {
    margin-right: 0;
  }
`;

const CardActions = props => <StyledCardActions {...props} />;

export default withStyle(CardActions);
