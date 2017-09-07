import React from 'react';
import Text from './Text';

const StepperText = props => {
  return (
    <Text>
      {props.active + 1} / {props.steps}
    </Text>
  );
};

export default StepperText;
