import React from 'react';
import styled from 'styled-components';
import Absolute from './Absolute';
import Fixed from './Fixed';
import Paper from './Paper';
import PropTypes from 'prop-types';
import withStyle from './Base';

const DrawerBackground = styled(Fixed).attrs({
  left: true,
  top: true
})`
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0,0,0,0.54);
    opacity: ${props => (props.open ? 1 : 0)};
    visibility: ${props => (props.open ? '' : 'hidden')};
    transition: all 225ms cubic-bezier(0,0,0.2,1) 0ms;
`;

const DrawerSidebar = styled(Fixed).attrs({
  left: props => !props.right,
  right: props => props.right,
  top: true
})`
    flex: 1 0 auto;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1500;
    flex-direction: column;
    transform: translate3d(${props =>
      props.open ? 0 : props.right ? props.w : -1 * props.w}px, 0, 0);
    visibility: ${props => (props.open ? '' : 'hidden')};
    transition: all 225ms cubic-bezier(0,0,0.2,1) 0ms;
`;

const Drawer = ({ width, right, open, onRequestClosed, ...props }) => {
  return (
    <Fixed z={1800}>
      <DrawerSidebar right={right} open={open} w={width}>
        <Paper {...props} w="100%" style={{ height: '100%' }} />
      </DrawerSidebar>
      <DrawerBackground open={open} onClick={onRequestClosed} />
    </Fixed>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  right: PropTypes.bool,
  onRequestClosed: PropTypes.func
};

Drawer.defaultProps = {
  open: true,
  width: 256,
  right: false,
  onRequestClosed: () => {}
};

export default Drawer;
