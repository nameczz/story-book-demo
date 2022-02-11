import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ZRating } from '../../core/Rating/Rating';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Basic/Rating',
  component: ZRating,
} as ComponentMeta<typeof ZRating>;

export const Rating: ComponentStory<typeof ZRating> = args => {
  const [value, setValue] = useState(2);
  return (
    <ZRating
      {...args}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
