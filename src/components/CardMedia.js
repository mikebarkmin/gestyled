import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Relative from './Relative';
import Absolute from './Absolute';
import withStyle from './Base';

const StyledCardMedia = styled.div`position: relative;`;

const StyledCardMediaOverlay = styled.div`
  padding-top: 8px;
  margin-bottom: 4px;
  background: rgba(0, 0, 0, 0.54);
`;

const StyledCardMediaTitleContainer = styled.div`
  padding: 16px;
  position: relative;
`;

const StyledCardMediaTitle = styled.span`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.87);
  display: block;
  line-height: 36px;
`;

const StyledCardMediaSubtitle = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.54);
  display: block;
`;

const CardMedia = props => {
  return (
    <StyledCardMedia {...props}>
      {props.children}
      <Absolute left right top bottom>
        <Relative style={{ height: '100%' }}>
          <Absolute bottom right left>
            <StyledCardMediaOverlay>
              <StyledCardMediaTitleContainer>
                <StyledCardMediaTitle>
                  {props.title}
                </StyledCardMediaTitle>
                <StyledCardMediaSubtitle>
                  {props.subtitle}
                </StyledCardMediaSubtitle>
              </StyledCardMediaTitleContainer>
            </StyledCardMediaOverlay>
          </Absolute>
        </Relative>
      </Absolute>
    </StyledCardMedia>
  );
};

CardMedia.propTypes = {
  overlay: PropTypes.element
};

export default withStyle(CardMedia);
