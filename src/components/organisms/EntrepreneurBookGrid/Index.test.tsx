import { render, screen } from '@testing-library/react';
import Grid from './Index';

describe('Entrepreneurship Book Grid', () => {
  test('Rndering Entrepreneurship grid', () => {
    render(
      <Grid title="Trending Blinks" subCategory="trending blinks" />
    );

    const gridElement = screen.getByRole('EntrepreneurshipBookGrid');

    expect(gridElement).toBeInTheDocument();
  });

  test('Randering title test', () => {
    render(
      <Grid title="Trending Blinks" subCategory="trending blinks" />
    );

    const gridTitle = screen.getByText('Trending Blinks');

    expect(gridTitle).toBeInTheDocument();
    expect(gridTitle).toHaveClass('MuiTypography-heading3');
    expect(gridTitle).toBeTruthy();
    expect(gridTitle).toBeDefined();
  });

  test('Rndering grid component', () => {
    render(
      <Grid title="Trending Blinks" subCategory="trending blinks" />
    );

    const gridComponent = screen.getByRole('BookGrid');

    expect(gridComponent).toBeInTheDocument();
  });
});
