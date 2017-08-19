import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledFloatingActionButton = styled(Button)`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    vertical-align: bottom;
    padding: 0px;
    font-size: ${props => props.theme.fontSizes[5]}px;
`;

const FloatingActionButton = props => <StyledFloatingActionButton {...props} />;

export default FloatingActionButton;
