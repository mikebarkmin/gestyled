import { keyframes } from 'styled-components';

const pulseKeyframes = keyframes`
    25% {
        transform: scale(1.1);
    }
    75% {
        transform: scale(0.9);
    }
`;

const pulse = `
    &:hover, &:focus, &:active {
        animation: ${pulseKeyframes} 1s linear infinite;
    }
`;

export default pulse;
