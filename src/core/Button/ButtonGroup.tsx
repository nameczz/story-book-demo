import * as React from 'react';
import { ZButton } from './Button';
import { ButtonGroup, ButtonGroupProps } from '@mui/material';

export const ZButtonGroup = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup {...props}>
      <ZButton>One</ZButton>
      <ZButton>Two</ZButton>
      <ZButton>Three</ZButton>
    </ButtonGroup>
  );
};
