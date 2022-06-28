import { ThemeProvider } from '@mui/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookGrid from './Index';
import baseTheme from '../../../theme/mainTheme';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organism/BookGrid',
  component: BookGrid,
} as ComponentMeta<typeof BookGrid>;

const Template: ComponentStory<typeof BookGrid> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <BookGrid {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const BookInLibraryReading = Template.bind({});
BookInLibraryReading.args = {
  status: 'reading',
  location: 'library',
  subCategory: 'none',
};

export const BookNotInLibrary = Template.bind({});
BookNotInLibrary.args = {
  status: 'none',
  location: 'notInLibrary',
  subCategory: 'Trending blinks',
};
