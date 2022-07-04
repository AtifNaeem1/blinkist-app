import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from './Index';

import theme from '../../../theme/mainTheme';
import { ThemeProvider } from '@mui/styles';

afterEach(cleanup);

test('rendering Typography', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByRole('Typography');
  expect(typographyElement).toBeInTheDocument();
  expect(typographyElement).toHaveTextContent('Hello');
  expect(typographyElement).toBeTruthy();
});

test('rendering Typography with heading', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="heading" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-heading');
});

test('rendering Typography with heading3', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="heading3" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-heading3');
});

test('rendering Typography with subtitle2', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="subtitle2" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-subtitle2');
});

test('rendering Typography with body1', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="body1" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-body1');
});

test('rendering Typography with subtitle1', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="subtitle1" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-subtitle1');
});

test('rendering Typography with body2', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="body2" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-body2');
});

test('rendering Typography with caption', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="caption" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-caption');
});

test('rendering Typography with button', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="button" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-button');
});

test('rendering Typography with overline', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="overline" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-overline');
});

test('rendering Typography with subtitle5', () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Hello" variant="subtitle5" />
    </ThemeProvider>
  );
  const typographyElement = screen.getByText('Hello');
  expect(typographyElement).toHaveClass('MuiTypography-subtitle5');
});
