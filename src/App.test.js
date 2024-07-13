import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';

test('renders todo input and button', () => {
  act(() => {
    render(<App />);
  });
  const inputElement = screen.getByPlaceholderText(/enter todo/i);
  const buttonElement = screen.getByText(/add/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
