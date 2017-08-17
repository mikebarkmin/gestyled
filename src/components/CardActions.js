import React from "react";
import styled from "styled-components";

const StyledCardActions = styled.div`
  padding: 8px;
  position: relative;
`;

const CardActions = props => <StyledCardActions {...props} />;

export default CardActions;
