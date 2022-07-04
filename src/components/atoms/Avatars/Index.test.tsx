import { render, screen } from '@testing-library/react';
import Avatar from './Index';
import '@testing-library/jest-dom';

describe('This is avatar', () => {
  render(<Avatar children="A" />);
  const inputElement = screen.getByRole('Avatar');
  test('rendering Avatar', () => {
    expect(inputElement).toBeInTheDocument();
  });

  test('Text in Avatar', () => {
    expect(inputElement).toHaveTextContent('A');
  });

  test('No focus', () => {
    expect(inputElement).not.toHaveFocus();
  });
});
