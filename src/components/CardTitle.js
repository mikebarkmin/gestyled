import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCardTitleContainer = styled.div`
  padding: 16px;
  position: relative;
`;

const StyledCardTitle = styled.span`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  line-height: 36px;
`;

const StyledCardSubtitle = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  display: block;
`;

const CardTitle = props => {
  return (
    <StyledCardTitleContainer>
      <StyledCardTitle>
        <StyledCardTitle>
          {props.title}
        </StyledCardTitle>
        <StyledCardSubtitle>
          {props.subtitle}
        </StyledCardSubtitle>
      </StyledCardTitle>
    </StyledCardTitleContainer>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default CardTitle;
