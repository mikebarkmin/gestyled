const shrink = `
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover, &:focus, &:active {
        transform: scale(0.9);
    }
`;

export default shrink;
