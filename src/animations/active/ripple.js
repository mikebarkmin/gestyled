import { keyframes } from 'styled-components';

const rippleKeyframes = keyframes`
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(10, 10);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(25, 25);
    }
`;

const ripple = `
    position: relative;
    overflow: hidden;
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, .5);
        opacity: 0;
        border-radius: 50%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
    }
    &:focus:not(:active)::after {
        animation: ${rippleKeyframes} 1s ease-out;
    }
`;

export default ripple;
