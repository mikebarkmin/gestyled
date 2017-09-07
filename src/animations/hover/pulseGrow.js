import { keyframes } from 'styled-components';

const pulseGrowKeyframes = keyframes`
    to {
        transform: scale(1.1);
    }
`;

const pulseGrow = `
    &:hover {
        animation: ${pulseGrowKeyframes} 0.3s linear infinite alternate;
    }
`;

export default pulseGrow;
