import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CustomButton } from '../core/button/Button';
import { ButtonProps } from '@material-ui/core';

export default {
  title: 'Example/Button',
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  children: 'Zilliz',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Zilliz',
};

export const Texted = Template.bind({});
Texted.args = {
  variant: 'text',
  children: 'Zilliz',
};
