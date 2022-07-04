import { render, screen } from '@testing-library/react';
import ReadAndFinished from './Index';
import '@testing-library/jest-dom';
import { fireEvent } from '@storybook/testing-library';

describe('Read and Finished Button', () => {
  render(
    <ReadAndFinished
      label="Read Again"
      handleClick={() => console.log('Read again clicked')}
    />
  );

  const readandFinishedButton = screen.getByRole('readFinished');

  test('rendering Button', () => {
    expect(readandFinishedButton).toBeInTheDocument();
    fireEvent.click(readandFinishedButton);
  });

  test('have label', () => {
    expect(readandFinishedButton).toHaveTextContent('Read Again');
  });
});
