import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VariantButtonGroup, CustomButton } from '../../core';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic/ButtonGroup',
  component: VariantButtonGroup,

  subcomponents: { CustomButton },
} as ComponentMeta<typeof VariantButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VariantButtonGroup> = args => (
  <VariantButtonGroup {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};
