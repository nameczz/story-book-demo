import { Button, ButtonProps, makeStyles } from '@material-ui/core';
import React from 'react';

const buttonStyle = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1, 3),
    textTransform: 'initial',
  },
  textBtn: {
    color: theme.palette.primary.main,
  },
  containedBtn: {
    color: '#fff',
    // backgroundColor: theme.palette.primary.main,
    boxShadow: 'initial',
    fontWeight: 'bold',
    lineHeight: '16px',
    '&:hover': {
      // backgroundColor: theme.palette.primary.light,
      boxShadow: 'initial',
    },
  },
  containedSecondary: {
    backgroundColor: '#fc4c02',

    '&:hover': {
      backgroundColor: '#fc4c02',
    },
  },
}));

// props types same as Material Button
export const CustomButton = (props: ButtonProps) => {
  const classes = buttonStyle();

  return (
    <Button
      classes={{
        root: classes.button,
        text: classes.textBtn,
        contained: classes.containedBtn,
        containedSecondary: classes.containedSecondary,
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
