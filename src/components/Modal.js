import React from 'react';
import styled from 'styled-components';
import Fixed from './Fixed';
import Paper from './Paper';
import PropTypes from 'prop-types';

const StyledModal = styled(Fixed).attrs({
  left: true,
  top: true
})`
    width: 100%;
    height: 100%;
    z-index: 1500;
    display: flex;
    overflow: auto;
    align-item: center;
    justify-content: center;
    opacity: ${props => (props.open ? 1 : 0)};
    visibility: ${props => (props.open ? '' : 'hidden')};
    transition: all 225ms cubic-bezier(0,0,0.2,1) 0ms;
`;

const StyledModalBackground = styled(Fixed).attrs({
  left: true,
  top: true
})`
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0,0,0,0.54);
`;

const StyledModalContent = styled.div`
  display: flex;
  flex: 0 1 auto;
  position: relative;
  overflow-y: auto;
  margin: 10% auto;
  flex-direction: column;
`;

const Modal = ({ onRequestClose, open, ...props }) =>
  <StyledModal open={open} onClick={onRequestClose}>
    <StyledModalBackground />
    <StyledModalContent {...props} onClick={event => event.stopPropagation()} />
  </StyledModal>;

Modal.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func
};

Modal.defaultProps = {
  open: false,
  onRequestClose: () => {}
};

export default Modal;
