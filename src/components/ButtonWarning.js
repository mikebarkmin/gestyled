import React from "react";
import Button from "./Button";
import { pastel } from "../theme";

/**
 * See Button for possible props.
 */
const ButtonWarning = props => {
  const { theme } = props;
  const bg = theme ? theme.warning : pastel.warning;
  const color = "white";
  return <Button bg={bg} color={color} {...props} />;
};

export default ButtonWarning;
