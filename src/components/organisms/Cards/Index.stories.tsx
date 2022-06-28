import { ThemeProvider } from '@mui/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookCard from './BookCard';
import baseTheme from '../../../theme/mainTheme';
import { MemoryRouter } from 'react-router-dom';

const bookDetail = {
  id: 1,
  finished: true,
  inLibrary: true,
  imgsrc: 'bringyourhumantowork.png',
  bookName: 'Bring Your Human To Work',
  authorName: 'Eric Keswin',
  time: '13 minute read',
  nReads: '1.9k reads',
  isBookReadAvailable: true,
  category: 'entrepreneurship',
  subcategory: 'Featured',
};

export default {
  title: 'organism/BookCard',
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <BookCard {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const CardInLibrary = Template.bind({});
CardInLibrary.args = {
  book: bookDetail,
  callingLocation: 'library',
  onClickHandler: {},
};

export const CardNotInLibrary = Template.bind({});
CardInLibrary.args = {
  book: bookDetail,
  callingLocation: 'notinlibrary',
  onClickHandler: {},
};
