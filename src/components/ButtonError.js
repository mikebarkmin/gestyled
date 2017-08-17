import React from "react";
import Button from "./Button";
import { pastel } from "../theme";

/**
 * See Button for possible props.
 * 
 * @class ButtonError
 * @extends {React.Component}
 */
class ButtonError extends React.Component {
  render() {
    const { theme } = this.props;
    const bg = theme ? theme.error : pastel.error;
    const color = "white";
    return <Button bg={bg} color={color} {...this.props} />;
  }
}

export default ButtonError;
