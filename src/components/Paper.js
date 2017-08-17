import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { pastel } from "../theme";
import { space, width, fontSize, color } from "styled-system";

const StyledPaper = styled.div`
  box-shadow: ${props => props.shadow};
  border-radius: ${props => props.borderRadius};
  transition: ${({ theme }) => theme.transition || pastel.transition};
  ${space} ${width} ${fontSize} ${color};
`;

const Paper = props => {
  const { level, theme } = props;
  let shadow = pastel.shadowLevel[level];
  if (theme && theme.shadowLevel && theme.shadowLevel.length > level) {
    shadow = theme.shadowLevel[level];
  }
  let borderRadius = "2px";
  if (props.circle) {
    borderRadius = "50%";
  }
  if (props.squared) {
    borderRadius = "none";
  }
  return <StyledPaper shadow={shadow} borderRadius={borderRadius} {...props} />;
};

Paper.propTypes = {
  transition: PropTypes.string,
  level: PropTypes.number,
  circle: PropTypes.bool,
  squared: PropTypes.bool
};

Paper.defaultProps = {
  transition: "none",
  level: 0,
  circle: false,
  squared: false
};

export default Paper;
