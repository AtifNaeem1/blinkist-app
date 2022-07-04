import { render, screen } from '@testing-library/react';

import Footer from './Index';

describe('Footer', () => {
  test('Randering footer', () => {
    render(<Footer />);

    const footerComponent = screen.getByRole('Footer');

    expect(footerComponent).toBeInTheDocument();
  });

  test('Randering footer left', () => {
    render(<Footer />);

    const footerComponent = screen.getByRole('footer-left');

    expect(footerComponent).toBeInTheDocument();
  });

  test('Randering footer right', () => {
    render(<Footer />);

    const footerComponent = screen.getByRole('footer-right');

    expect(footerComponent).toBeInTheDocument();
  });

  test('Randering footer image', () => {
    render(<Footer />);

    const footerImage = screen.getByRole('footerImage');

    expect(footerImage).toBeInTheDocument();
    expect(footerImage).toBeTruthy();
    expect(footerImage).toBeDefined();
  });

  test('Randering footer main text', () => {
    render(<Footer />);

    const footerText = screen.getByRole('footerText');

    expect(footerText).toBeInTheDocument();
    expect(footerText).toBeTruthy();
    expect(footerText).toBeDefined();
  });

  test('footer subHeadings', () => {
    render(<Footer />);

    const footerSubHeading = screen.getByText('Editorial');

    expect(footerSubHeading).toBeInTheDocument();
    expect(footerSubHeading).toBeTruthy();
    expect(footerSubHeading).toBeDefined();
    expect(footerSubHeading).toHaveClass('MuiTypography-body1');
  });

  test('footer text', () => {
    render(<Footer />);

    const footerText = screen.getByText('Book lists');

    expect(footerText).toBeInTheDocument();
    expect(footerText).toBeTruthy();
    expect(footerText).toBeDefined();
    expect(footerText).toHaveClass('MuiTypography-body2');
  });

  test('footer bottom text', () => {
    render(<Footer />);

    const footerBottomText = screen.getByText('Book lists');

    expect(footerBottomText).toBeInTheDocument();
    expect(footerBottomText).toBeTruthy();
    expect(footerBottomText).toBeDefined();
    expect(footerBottomText).toHaveClass('MuiTypography-body2');
  });
});
