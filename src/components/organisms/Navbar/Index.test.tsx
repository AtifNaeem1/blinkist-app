import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Index';

const mockfunction = jest.fn();

describe('Navbar', () => {
  test('Navbar rendering test', () => {
    render(<Navbar clicked={true} handleToggle={mockfunction} />, {
      wrapper: MemoryRouter,
    });

    const navbar = screen.getByRole('AppBar');

    expect(navbar).toBeInTheDocument();
  });

  test('Navbar logo test', () => {
    render(<Navbar clicked={true} handleToggle={mockfunction} />, {
      wrapper: MemoryRouter,
    });

    const navbarLogo = screen.getByRole('logo');

    expect(navbarLogo).toBeInTheDocument();
  });

  test('Search icon test', () => {
    render(<Navbar clicked={true} handleToggle={mockfunction} />, {
      wrapper: MemoryRouter,
    });

    const searchIcon = screen.getByRole('search');

    expect(searchIcon).toBeInTheDocument();
  });

  test('Explore button text', () => {
    render(<Navbar clicked={true} handleToggle={mockfunction} />, {
      wrapper: MemoryRouter,
    });

    const ExploreText = screen.getByText('Explore');

    expect(ExploreText).toBeInTheDocument();
    expect(ExploreText).toBeTruthy();
    expect(ExploreText).toBeDefined();
    expect(ExploreText).toHaveClass('MuiTypography-body1');
  });

  test('MyLibrary button text', () => {
    render(<Navbar clicked={true} handleToggle={mockfunction} />, {
      wrapper: MemoryRouter,
    });

    const MyLibraryText = screen.getByText('My Library');

    expect(MyLibraryText).toBeInTheDocument();
    expect(MyLibraryText).toBeTruthy();
    expect(MyLibraryText).toBeDefined();
    expect(MyLibraryText).toHaveClass('MuiTypography-body1');
  });

  test('Explore Pop-up', () => {
    render(<Navbar clicked={true} handleToggle={mockfunction} />, {
      wrapper: MemoryRouter,
    });

    const MyLibraryText = screen.getByTestId('Explore-Popup');

    expect(MyLibraryText).toBeInTheDocument();
    expect(MyLibraryText).toBeTruthy();
    expect(MyLibraryText).toBeDefined();
  });
});
