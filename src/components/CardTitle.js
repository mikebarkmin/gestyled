import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';
import Container from './Container';
import Title from './Title';
import Caption from './Caption';

const CardTitle = props => {
  return (
    <Container p={3}>
      <Container>
        <Title>
          {props.title}
        </Title>
      </Container>
      <Container>
        <Caption>
          {props.subtitle}
        </Caption>
      </Container>
    </Container>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default withStyle(CardTitle);
