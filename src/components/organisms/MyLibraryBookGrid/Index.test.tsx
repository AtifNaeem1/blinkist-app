import { render, screen } from '@testing-library/react';

import BookGrid from './Index';

describe('My Library book grid', () => {
  test('My library book grid rendering', () => {
    render(
      <BookGrid
        status="reading"
        location="library"
        subCategory="null"
      />
    );

    const bookGrid = screen.getByRole('MyLibraryBookGrid');

    expect(bookGrid).toBeInTheDocument();
  });

  test('Book Card in Library Grid', () => {
    render(
      <BookGrid
        status="reading"
        location="library"
        subCategory="null"
      />
    );
    const bookCard = screen.getByRole('BookCard');
    expect(bookCard).toBeInTheDocument();
  });
});
