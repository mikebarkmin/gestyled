import React from "react";
import Button from "./Button";
import { pastel } from "../theme";

/**
 * See Button for possible props.
 * 
 * @class ButtonInfo
 * @extends {React.Component}
 */
class ButtonInfo extends React.Component {
  render() {
    const { theme } = this.props;
    const bg = theme ? theme.info : pastel.info;
    const color = "white";
    return <Button bg={bg} color={color} {...this.props} />;
  }
}

export default ButtonInfo;
