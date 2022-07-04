import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Index';
import AddIcon from '@mui/icons-material/Add';
import TypographyComponent from '../../atoms/Typography/Index';

afterEach(cleanup);

describe('Testing Button Atom', () => {
  render(<Button children="Read Now" />);
  const button = screen.getByRole('button');

  test('Rendering the button', () => {
    expect(button).toBeInTheDocument();
  });
  test('button with text', () => {
    expect(button).toHaveTextContent('Read Now');
  });
});

test('outlined button', () => {
  render(
    <Button
      variant="outlined"
      onClick={() => console.log('Button Clicked')}
    />
  );
  const outlinedButton = screen.getByRole('button');
  expect(outlinedButton).toBeInTheDocument();
  expect(outlinedButton).toHaveClass('MuiButton-outlined');
});

test('text button', () => {
  render(<Button variant="text" />);
  const textButton = screen.getByRole('button');
  expect(textButton).toHaveClass('MuiButton-text');
});

test('contained button', () => {
  render(<Button variant="contained" />);
  const textButton = screen.getByRole('button');
  expect(textButton).toHaveClass('MuiButton-containedPrimary');
});

test('button with event', () => {
  render(
    <Button
      variant="contained"
      onClick={() => console.log('Clicked')}
    />
  );
  const textButton = screen.getByRole('button');
  fireEvent.click(textButton);
});

test('with icon', () => {
  render(
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      children={
        <TypographyComponent
          variant="body2"
          children="Add to library"
        />
      }
      onClick={() => console.log('Clicked the button')}
    />
  );
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Add to library');
  expect(button).toHaveClass('MuiButton-outlined');
});
