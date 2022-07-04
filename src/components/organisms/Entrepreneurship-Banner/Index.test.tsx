import { render, screen } from '@testing-library/react';

import Banner from './Index';

describe('Entrepreneurship Banner', () => {
  test('Rendering Entrepreneurship Banner', () => {
    render(<Banner />);

    const BannerElement = screen.getByRole('EntrepreneurshipBanner');

    expect(BannerElement).toBeInTheDocument();
  });

  test('Rendering Banner Heading', () => {
    render(<Banner />);

    const BannerHeading = screen.getByText(
      'Explore Books on entrepreneurship'
    );

    expect(BannerHeading).toBeInTheDocument();
    expect(BannerHeading).toHaveClass('MuiTypography-heading');
    expect(BannerHeading).toBeTruthy();
    expect(BannerHeading).toBeDefined();
  });

  test('Rendering Banner Text', () => {
    render(<Banner />);

    const BannerText = screen.getByText(
      'Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start'
    );

    expect(BannerText).toBeInTheDocument();
    expect(BannerText).toHaveClass('MuiTypography-subtitle2');
    expect(BannerText).toBeTruthy();
    expect(BannerText).toBeDefined();
  });

  test('Rendering Banner Image', () => {
    render(<Banner />);

    const BannerImage = screen.getByRole('BannerImage');

    expect(BannerImage).toBeInTheDocument();
    expect(BannerImage).toBeTruthy();
    expect(BannerImage).toBeDefined();
  });
});
