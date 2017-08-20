import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { color } from 'styled-system';

const StyledBox = styled(Box)`
    ${color}
`;

export default props => <StyledBox {...props} />;
