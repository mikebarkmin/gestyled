import styled, { keyframes } from 'styled-components';

const rotate360Keyframes = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const rotate360 = `
    &:hover, &:active, &:focus {
        animation: ${rotate360Keyframes} 1s linear infinite;
    }
`;

export default rotate360;
