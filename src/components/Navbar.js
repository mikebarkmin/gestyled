import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paper from './Paper';
import Title from './Title';
import Container from './Container';

const StyledNavbar = styled(Paper)`
    width: 100%;
    padding: 12px 24px;
    background-color: ${props => props.bg || props.theme.colors.primary};
    color: ${props => props.color || props.theme.colors.primaryText};
    font-size: ${props => props.theme.fontSizes[3]}px;
    min-height: 54px;
    z-index: 1000;
`;

const StyledNavbarContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content; center;
`;

const StyledNavbarTitle = styled.div`
  flex: 1 1 0;
  padding-left: ${props => (props.left ? '24px' : '')};
`;

/**
 * See Paper component for additional props
 */
const Navbar = props =>
  <StyledNavbar {...props}>
    <StyledNavbarContainer>
      {props.left}
      <StyledNavbarTitle left={props.left}>
        {props.title}
      </StyledNavbarTitle>
      {props.right}
    </StyledNavbarContainer>
  </StyledNavbar>;

Navbar.propTypes = {
  /** Element to display in the middle */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Element to display on the right */
  right: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Element to display on the left */
  left: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Navbar;
