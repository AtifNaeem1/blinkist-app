import { render, screen } from '@testing-library/react';

import ExploreMenu from './Index';

const mockfunction = jest.fn();

describe('Explore Menu', () => {
  test('Explore rendering', () => {
    render(<ExploreMenu handleChange={mockfunction} />);

    const xploreMenu = screen.getByRole('Explore');

    expect(xploreMenu).toBeInTheDocument();
  });

  test('Explore Top Menu', () => {
    render(<ExploreMenu handleChange={mockfunction} />);
    const topMenu = screen.getByText('Explore by category');
    expect(topMenu).toBeInTheDocument();
    expect(topMenu).toHaveClass('MuiTypography-body1');
    expect(topMenu).toBeTruthy();
    expect(topMenu).toBeDefined();
  });

  test('Divider', () => {
    render(<ExploreMenu handleChange={mockfunction} />);
    const divider = screen.getByRole('Divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toBeTruthy();
    expect(divider).toBeDefined();
  });

  test('Explore Items', () => {
    render(<ExploreMenu handleChange={mockfunction} />);
    const exploreItems = screen.getByRole('ExploreItems');
    expect(exploreItems).toBeInTheDocument();
    expect(exploreItems).toBeTruthy();
    expect(exploreItems).toBeDefined();
  });

  test('Explore Item text', () => {
    render(<ExploreMenu handleChange={mockfunction} />);
    const exploreItemText = screen.getByText('Personal Development');
    expect(exploreItemText).toBeInTheDocument();
    expect(exploreItemText).toBeTruthy();
    expect(exploreItemText).toBeDefined();
    expect(exploreItemText).toHaveClass('MuiTypography-body2');
  });
});
