import * as React from "react";
import { CustomButton } from "./Button";
import { ButtonGroup, ButtonGroupProps } from "@mui/material";

export const VariantButtonGroup = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup {...props}>
      <CustomButton>One</CustomButton>
      <CustomButton>Two</CustomButton>
      <CustomButton>Three</CustomButton>
    </ButtonGroup>
  );
};
