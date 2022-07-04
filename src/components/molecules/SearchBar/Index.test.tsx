import { render, screen } from '@testing-library/react';
import SearchBar from './Index';
import '@testing-library/jest-dom';
import { fireEvent } from '@storybook/testing-library';

describe('Search Bar', () => {
  render(
    <SearchBar
      handleChange={() => console.log('SearchBar Changed')}
    />
  );

  const searchArea = screen.getByPlaceholderText(
    'Search by title or author'
  );

  test('render search bar', () => {
    expect(searchArea).toBeInTheDocument();
    expect(searchArea).toBeTruthy();
    expect(searchArea).toBeDefined();
    expect(searchArea).toHaveClass('MuiInputBase-inputAdornedStart');
    fireEvent.change(searchArea);
  });
});
