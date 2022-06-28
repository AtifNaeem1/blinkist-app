import { ThemeProvider } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddToLibrary from './Index';
import baseTheme from '../../../theme/mainTheme';

export default {
  title: 'molecules/AddtoLibrary',
  component: AddToLibrary,
} as ComponentMeta<typeof AddToLibrary>;

const Template: ComponentStory<typeof AddToLibrary> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <AddToLibrary {...args} />
  </ThemeProvider>
);

export const AddToLib = Template.bind({});
AddToLib.args = {
  handleClick: 'any',
};
