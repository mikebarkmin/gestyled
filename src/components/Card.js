import React from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import withStyle from './Base';

const StyledCard = styled(Paper)`
`;

const Card = props => <StyledCard {...props} />;

export default withStyle(Card);
