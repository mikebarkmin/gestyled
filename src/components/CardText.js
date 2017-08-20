import React from 'react';
import Text from './Text';
import Container from './Container';

const CardText = props =>
  <Container p={3}>
    <Text {...props} />
  </Container>;

export default CardText;
