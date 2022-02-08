import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VariantButtonGroup, CustomButton } from "../../core";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Basic/ButtonGroup",
  component: VariantButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  subcomponents: { CustomButton },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof VariantButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VariantButtonGroup> = (args) => (
  <VariantButtonGroup {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};
