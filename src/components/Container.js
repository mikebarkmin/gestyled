import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const StyledContainer = styled(Box)`
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
`;

const Container = props => <StyledContainer {...props} />;

export default Container;
