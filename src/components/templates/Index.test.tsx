import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import BlinkistTemplate from './BlinkistTemplate';

describe('Blinkist Template', () => {
  test('Template rendering', () => {
    render(<BlinkistTemplate children={<div></div>} />, {
      wrapper: MemoryRouter,
    });
    const template = screen.getByRole('Template');
    expect(template).toBeInTheDocument();
  });

  test('Header rendering', () => {
    render(<BlinkistTemplate children={<div></div>} />, {
      wrapper: MemoryRouter,
    });
    const templateHeader = screen.getByRole('TemplateHeader');
    expect(templateHeader).toBeInTheDocument();
  });

  test('Content rendering', () => {
    render(<BlinkistTemplate children={<div></div>} />, {
      wrapper: MemoryRouter,
    });
    const templateContent = screen.getByRole('main-content');
    expect(templateContent).toBeInTheDocument();
  });

  test('Footer rendering', () => {
    render(<BlinkistTemplate children={<div></div>} />, {
      wrapper: MemoryRouter,
    });
    const templateFooter = screen.getByRole('footer');
    expect(templateFooter).toBeInTheDocument();
  });
});
