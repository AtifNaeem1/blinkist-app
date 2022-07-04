import { render, screen } from '@testing-library/react';
import BookReadTime from './BookReadTime';
import '@testing-library/jest-dom';

describe('Book Read Time', () => {
  render(<BookReadTime readTime="13 minute read" />);

  const readTime = screen.getByTestId('BookReadTime');

  test('rendering Book Read Time', () => {
    expect(readTime).toBeInTheDocument();
  });

  test('Read time', () => {
    expect(readTime).toHaveTextContent('13 minute read');
  });
});
