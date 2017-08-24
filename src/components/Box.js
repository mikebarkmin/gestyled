import React from 'react';
import styled from 'styled-components';
import { Box as GSBox } from 'grid-styled';
import { color } from 'styled-system';
import withStyle from './Base';

const StyledBox = styled(GSBox)`
    ${color}
`;

const Box = props => <StyledBox {...props} />;

export default withStyle(Box);
