import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';

const StyledCardHeader = withStyle(styled.div`
  padding: 16px;
  font-weight: 500;
  box-sizing: border-box;
  position: relative;
  white-space: nowrap;
`);

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

const StyledCardHeaderTitleContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  padding-right: 90;
`;

const StyledCardHeaderTitle = styled.span`
  color: rgba(0, 0, 0, 0.87);
  display: block;
  font-size: 15px;
`;

const StyledCardHeaderSubtitle = styled.span`
  color: rgba(0, 0, 0, 0.54);
  display: block;
  font-size: 14px;
`;

const CardHeader = props =>
  <StyledCardHeader>
    {props.avatar
      ? <StyledCardHeaderAvatar size="40" src={props.avatar} />
      : ''}
    <StyledCardHeaderTitleContainer>
      <StyledCardHeaderTitle>
        {props.title}
      </StyledCardHeaderTitle>
      <StyledCardHeaderSubtitle>
        {props.subtitle}
      </StyledCardHeaderSubtitle>
    </StyledCardHeaderTitleContainer>
  </StyledCardHeader>;

CardHeader.propTypes = {
  /** Title */
  title: PropTypes.string,
  /** Subtitle displayed under the title */
  subtitle: PropTypes.string,
  /** URL to an image displayed on the left-hand-side of the title */
  avatar: PropTypes.string
};

export default withStyle(CardHeader);
