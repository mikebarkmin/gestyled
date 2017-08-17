import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Relative from "./Relative";
import Absolute from "./Absolute";

const StyledCardMedia = styled.div`position: relative;`;

const StyledCardMediaOverlay = styled.div`
  padding-top: 8px;
  background: rgba(0, 0, 0, 0.54);
`;

const CardMedia = props => {
  return (
    <StyledCardMedia {...props}>
      {props.children}
      <Absolute left right top bottom>
        <Relative style={{ height: "100%" }}>
          <Absolute bottom right left>
            <StyledCardMediaOverlay>
              {props.overlay}
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

export default CardMedia;
