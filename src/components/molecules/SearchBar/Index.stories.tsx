import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import baseTheme from '../../../theme/mainTheme';
import SearchBar from './Index';
const SearchField = {
  title: 'Molecules/SearchField',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <SearchBar handleChange={() => {}} />
  </ThemeProvider>
);

export const textFieldSearch = Template.bind({});

export default SearchField;
