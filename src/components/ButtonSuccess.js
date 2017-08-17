import React from "react";
import Button from "./Button";
import { pastel } from "../theme";

/**
 * See Button for possible props.
 * 
 * @class ButtonSuccess
 * @extends {React.Component}
 */
class ButtonSuccess extends React.Component {
  render() {
    const { theme } = this.props;
    const bg = theme ? theme.success : pastel.success;
    const color = "white";
    return <Button bg={bg} color={color} {...this.props} />;
  }
}

export default ButtonSuccess;
