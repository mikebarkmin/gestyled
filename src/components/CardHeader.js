import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';
import Box from './Box';
import Flex from './Flex';
import InlineBox from './InlineBox';
import Title from './Title';
import Caption from './Caption';

const StyledCardHeaderAvatar = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(188, 188, 188);
`;

const CardHeader = props =>
  <Flex align="center" justify="center" p={3}>
    {props.avatar
      ? <StyledCardHeaderAvatar size="40" src={props.avatar} />
      : ''}
    <InlineBox flex="1 1 auto">
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
    </InlineBox>
  </Flex>;

CardHeader.propTypes = {
  /** Title */
  title: PropTypes.string,
  /** Subtitle displayed under the title */
  subtitle: PropTypes.string,
  /** URL to an image displayed on the left-hand-side of the title */
  avatar: PropTypes.string
};

export default withStyle(CardHeader);
