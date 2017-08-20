import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const StyledInlineBox = styled(Box)`
    display: inline-block;
`;

const InlineBox = props => <StyledInlineBox {...props} />;

export default InlineBox;
