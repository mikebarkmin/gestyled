import { keyframes } from 'styled-components';

const popKeyframes = keyframes`
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`;

const pop = `
    &:hover {
        animation: ${popKeyframes} 0.3s linear 1;
    }
`;

export default pop;
