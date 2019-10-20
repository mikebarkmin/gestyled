import { css, keyframes } from 'styled-components';

const pulseShrinkKeyframes = keyframes`
    to {
        transform: scale(0.9);
    }
`;

const pulseShrink = css`
  &:hover {
    animation: ${pulseShrinkKeyframes} 0.3s linear infinite alternate;
  }
`;

export default pulseShrink;
