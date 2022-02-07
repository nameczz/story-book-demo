import React from "react";
import { Button, ButtonProps } from "@mui/material";

// props types same as Material Button
export const CustomButton = (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};
