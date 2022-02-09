import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CustomButton } from '../../core/Button/Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Basic/Button',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

export const Primary: ComponentStory<typeof CustomButton> = args => {
  return (
    <CustomButton
      {...args}
      onClick={action('custom button click')}
      children="Primary Button"
      color="primary"
    />
  );
};

export const Large = args => {
  return (
    <CustomButton
      {...args}
      onClick={action('custom button click')}
      children="Primary Large Button"
      color="primary"
      size="large"
    />
  );
};
