import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

const StyledCircle = styled.div`
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 5px;
  background-color: ${props =>
    props.active ? props.theme.colors.primary : 'lightgrey'};

  &:hover {
    background-color: ${props =>
      props.active
        ? transparentize(0.5, props.theme.colors.primary)
        : transparentize(0.5, 'lightgrey')};
  }
`;

const StepperDots = props => {
  const dots = [];
  let steps = props.steps;

  for (let step = 0; step < steps; step++) {
    dots.push(
      <StyledCircle
        key={step}
        active={step === props.active}
        onClick={() => props.onClick(step)}
      />
    );
  }

  return (
    <div style={{ display: 'inline-block' }}>
      {dots}
    </div>
  );
};

export default StepperDots;
