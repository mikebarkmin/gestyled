import { css, keyframes } from 'styled-components';

const pushKeyframes = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
`;

const push = css`
  &:hover {
    animation: ${pushKeyframes} 0.3s linear 1;
  }
`;

export default push;
