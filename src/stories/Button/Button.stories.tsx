import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ZButton } from '../../core/Button/Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Basic/Button',
  component: ZButton,
} as ComponentMeta<typeof ZButton>;

export const Primary: ComponentStory<typeof ZButton> = args => {
  return (
    <ZButton
      {...args}
      onClick={action('custom button click')}
      children="Primary Button"
      color="primary"
    />
  );
};

export const Large = args => {
  return (
    <ZButton
      {...args}
      onClick={action('custom button click')}
      children="Primary Large Button"
      color="primary"
      size="large"
    />
  );
};
