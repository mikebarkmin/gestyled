import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';
import Paper from './Paper';

const StyledImageCropped = styled.div`
  border-radius: ${props => (props.circle ? '50%' : '')};
  height: ${props => (props.circle ? props.width : props.height)};
  background-image: ${props => `url(${props.src})`};
  background-position: ${props => `${props.x} ${props.y}`};
  background-repeat: no-repeat;
`;

const ImageCropped = props => {
  let { height, width } = props;
  if (!isNaN(height)) {
    height = height + 'px';
  }
  if (!isNaN(width)) {
    width = width + 'px';
  }
  return (
    <Paper circle={props.circle} level={props.level} width={width}>
      <StyledImageCropped {...props} height={height} width={width} />
    </Paper>
  );
};

export default withStyle(ImageCropped);
