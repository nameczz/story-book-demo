/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ZButton } from '../core/Button/Button';

let container: any = null;

jest.mock('@mui/material/Button', () => {
  return props => {
    const { variant, children } = props;
    return (
      <>
        <div className="variant">{variant}</div>
        <button className="button">{children}</button>;
      </>
    );
  };
});

describe('Test CustomButton', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('test button props', () => {
    act(() => {
      render(<ZButton variant="contained">test</ZButton>, container);
    });

    expect(container.querySelector('.button').textContent).toBe('test');
    expect(container.querySelector('.variant').textContent).toBe('contained');
  });
});
