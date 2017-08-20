import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';
import Paper from './Paper';
import PropTypes from 'prop-types';

const StyledImageCropped = styled.div`
  border-radius: ${props => (props.circle ? '50%' : '')};
  height: ${props => (props.circle ? props.width : props.height)};
  background-image: ${props => `url(${props.src})`};
  background-position: ${props => `${props.x} ${props.y}`};
  background-repeat: no-repeat;
`;

const ImageCropped = props => {
  let { height, width, x, y } = props;
  if (!isNaN(height)) {
    height = height + 'px';
  }
  if (!isNaN(width)) {
    width = width + 'px';
  }
  if (!isNaN(x)) {
    x = x + 'px';
  }
  if (!isNaN(y)) {
    y = y + 'px';
  }
  return (
    <Paper circle={props.circle} level={props.level} width={width}>
      <StyledImageCropped
        {...props}
        height={height}
        width={width}
        x={x}
        y={y}
      />
    </Paper>
  );
};

ImageCropped.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circle: PropTypes.bool,
  src: PropTypes.string,
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

ImageCropped.defaultProps = {
  x: 0,
  y: 0
};

export default withStyle(ImageCropped);
