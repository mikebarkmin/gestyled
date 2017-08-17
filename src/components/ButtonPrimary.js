import React from "react";
import Button from "./Button";
import { pastel } from "../theme";

/**
 * See Button for possible props.
 * 
 * @class ButtonPrimary
 * @extends {React.Component}
 */
class ButtonPrimary extends React.Component {
  render() {
    const { theme } = this.props;
    const bg = theme ? theme.primary : pastel.primary;
    const color = theme ? theme.primaryText : pastel.primaryText;
    return <Button bg={bg} color={color} {...this.props} />;
  }
}

export default ButtonPrimary;
