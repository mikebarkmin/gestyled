import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';
import Paper from './Paper';

const StyledImage = styled.img`
  vertical-align: top;
  margin: 0;
`;

const Image = props => {
  return (
    <Paper level={props.level} width={props.width}>
      <StyledImage {...props} />
    </Paper>
  );
};

export default withStyle(Image);
