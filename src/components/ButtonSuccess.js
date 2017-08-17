import React from "react";
import Button from "./Button";
import { pastel } from "../theme";

/**
 * See Button for possible props.
 */
const ButtonSuccess = props => {
  const { theme } = props;
  const bg = theme ? theme.success : pastel.success;
  const color = "white";
  return <Button bg={bg} color={color} {...props} />;
};

export default ButtonSuccess;
