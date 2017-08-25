import React from 'react';
import styled from 'styled-components';
import { Box as GSBox } from 'grid-styled';
import withStyle from './Base';

const StyledBox = styled(GSBox)`
`;

const Box = ({ bg, ...props }) => <StyledBox {...props} />;

export default withStyle(Box);
