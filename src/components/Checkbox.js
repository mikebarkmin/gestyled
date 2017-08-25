import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
    appearance: none;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    border: 2px solid #090909;

    &:focus {
        outline: 0;
    }

    &:checked {
        border-color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.primary};
    }

    &:checked:after {
        content: '✔';
        color: ${props => props.theme.colors.primaryText};
    }

`;

const Checkbox = props => <StyledCheckbox {...props} />;

export default withStyle(Checkbox);
