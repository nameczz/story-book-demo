# Zilliz design system

## Component style

[Material-UI system sx field](https://mui.com/zh/system/basics/)
The system focus on solving 3 main problems:

1. Switching context wastes time.

2. Naming things is hard.

3. Enforcing consistency in UIs is hard.

## Create Component

1. Go to core folder
2. Create component folder like Button
3. Create component like Button.tsx, and component name need start with Z like ZButton.
4. Export component in core/index.tsx (Easy for use as lib)

## Add Component Story

1. Go to stories folder
2. Create xxx.stories.tsx
3. Export different component demos like:

```javascript
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
```

4. Component doc (Optional).

## Publish

1. Create PR to dev branch
2. Merge into dev branch after code review
3. Action will publish to ui-dev.zilliz.cc
4. Create PR to main branch
5. Paste story component url in comment
6. Merge into main branch after ui team review.
7. Action will publish to ui.zilliz.cc
8. Release with tag, action will publish to npm.
