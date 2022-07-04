import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './BookCard';

const mockfunction = jest.fn();

const Book = {
  id: 2,
  finished: false,
  inLibrary: true,
  imgsrc: 'employee_to_entrepreneur.jpg',
  bookName: 'Employee to Entrepreneur',
  authorName: 'Steve Glaveski',
  time: '15-minute read',
  nReads: '1.9k reads',
  isBookReadAvailable: true,
  category: 'entrepreneurship',
  subcategory: 'Trending blinks',
};

describe('Book Card', () => {
  test('Card rendering test', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const bookCard = screen.getByRole('BookCard');

    expect(bookCard).toBeInTheDocument();
  });

  test('Book Card Authors rendering', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const author = screen.getByText(Book.authorName);
    expect(author).toBeInTheDocument();
    expect(author).toBeTruthy();
    expect(author).toBeDefined();
    expect(author).toHaveClass('MuiTypography-body1');
  });

  test('Book title rendering', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const title = screen.getByText(Book.bookName);
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
    expect(title).toBeDefined();
    expect(title).toHaveClass('MuiTypography-subtitle1');
  });

  test('Book Read Time', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const readTime = screen.getByText(Book.time);
    expect(readTime).toBeInTheDocument();
    expect(readTime).toBeTruthy();
    expect(readTime).toBeDefined();
    expect(readTime).toHaveClass('MuiTypography-caption');
  });

  test('Total Reads', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const totalRead = screen.getByText(Book.nReads);
    expect(totalRead).toBeInTheDocument();
    expect(totalRead).toBeTruthy();
    expect(totalRead).toBeDefined();
    expect(totalRead).toHaveClass('MuiTypography-caption');
  });

  test('Finished Button', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const finishedButton = screen.getByText('Finished');
    expect(finishedButton).toBeInTheDocument();
    expect(finishedButton).toBeTruthy();
    expect(finishedButton).toBeDefined();
    expect(finishedButton).toHaveClass('MuiTypography-body1');
  });

  test('Card Image', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const cardImage = screen.getByRole('CardImage');
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toBeTruthy();
    expect(cardImage).toBeDefined();
  });

  test('Finish timeline', () => {
    render(
      <Card
        book={Book}
        callingLocation="library"
        onClickHandler={mockfunction}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const finishedTimeline = screen.getByRole('finishedTimeline');
    expect(finishedTimeline).toBeInTheDocument();
    expect(finishedTimeline).toBeTruthy();
    expect(finishedTimeline).toBeDefined();
  });
});
