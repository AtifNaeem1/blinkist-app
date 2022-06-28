import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import baseTheme from '../../../theme/mainTheme';
import BookReadTime from './BookReadTime';
const BookReadTimeStory = {
  title: 'Molecules/BookReadTimeStory',
  component: BookReadTime,
} as ComponentMeta<typeof BookReadTime>;

const Template: ComponentStory<typeof BookReadTime> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <BookReadTime {...args} />
  </ThemeProvider>
);

export const bookRead = Template.bind({});
bookRead.args = {
  children: 'Add to library',
};

export default BookReadTimeStory;
