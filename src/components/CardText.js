import React from 'react';
import Text from './Text';
import Box from './Box';

const CardText = props =>
  <Box p={3}>
    <Text {...props} />
  </Box>;

export default CardText;
