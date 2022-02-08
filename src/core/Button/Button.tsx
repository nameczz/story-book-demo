import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export const CustomButton = (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};
