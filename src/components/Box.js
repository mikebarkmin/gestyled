import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { color } from 'styled-system';
import withStyle from './Base';

const StyledBox = styled(Box)`
    ${color}
`;

const MyBox = props => <StyledBox {...props} />;

export default withStyle(MyBox);
