import { css, keyframes } from 'styled-components';

const pulseKeyframes = keyframes`
    25% {
        transform: scale(1.1);
    }
    75% {
        transform: scale(0.9);
    }
`;

const pulse = css`
  &:hover {
    animation: ${pulseKeyframes} 1s linear infinite;
  }
`;

export default pulse;
