import React from "react";
import { ComponentMeta } from "@storybook/react";
import { CustomButton } from "../../core/Button/Button";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Basic/Button",
  component: CustomButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CustomButton>;

export const Primary = (args) => {
  return (
    <CustomButton
      {...args}
      onClick={action("custom button click")}
      children="Primary Button"
      color="primary"
    />
  );
};

export const Large = (args) => {
  return (
    <CustomButton
      {...args}
      onClick={action("custom button click")}
      children="Primary Large Button"
      color="primary"
      size="large"
    />
  );
};
