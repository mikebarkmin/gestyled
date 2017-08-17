import React from "react";
import styled from "styled-components";

const StyledCardText = styled.div`
  padding: 16px;
  font-size: 14px;
`;

const CardText = props => <StyledCardText {...props} />;

export default CardText;
