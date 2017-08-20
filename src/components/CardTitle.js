import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';
import Box from './Box';
import Title from './Title';
import Caption from './Caption';

const CardTitle = props => {
  return (
    <Box p={3}>
      <Box>
        <Title>
          {props.title}
        </Title>
      </Box>
      <Box>
        <Caption>
          {props.subtitle}
        </Caption>
      </Box>
    </Box>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default withStyle(CardTitle);
