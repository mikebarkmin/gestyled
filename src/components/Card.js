import React from "react";
import styled from "styled-components";
import { pastel } from "../theme";
import Paper from "./Paper";

const StyledCard = styled(Paper)`
`;

const Card = props => <StyledCard {...props} />;

export default Card;
