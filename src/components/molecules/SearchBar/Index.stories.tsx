import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import baseTheme from '../../../theme/mainTheme';
import SearchBar from './Index';
const SearchField = {
  title: 'Molecules/SearchField',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => (
  <ThemeProvider theme={baseTheme}>
    <SearchBar
      handleChange={() => {
        console.log('Search bar changed');
      }}
    />
  </ThemeProvider>
);

export const textFieldSearch = Template.bind({});

export default SearchField;
