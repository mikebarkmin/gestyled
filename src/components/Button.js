import React from "react";
import styled, { withTheme } from "styled-components";

const StyledButton = styled.button`
  border-radius: 2px;
  background-color: ${props => props.theme.color1};
`;

class Button extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return <StyledButton {...this.props} />;
  }
}

export default Button;
