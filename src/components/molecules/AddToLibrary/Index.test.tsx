import { render, screen } from '@testing-library/react';
import AddToLib from './Index';
import '@testing-library/jest-dom';
import { fireEvent } from '@storybook/testing-library';

describe('Add to Library button', () => {
  render(
    <AddToLib
      handleClick={() => console.log('Add to Library clicked')}
    />
  );

  const inputElement = screen.getByRole('AddToLib');

  test('rendering AddToLib Button', () => {
    expect(inputElement).toBeInTheDocument();
    fireEvent.click(inputElement);
  });

  test('Text in Button', () => {
    expect(inputElement).toHaveTextContent('Add to library');
  });
});
