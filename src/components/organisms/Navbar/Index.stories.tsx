import { ThemeProvider } from '@mui/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Index';
import baseTheme from '../../../theme/mainTheme';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organism/NavBar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <Navbar {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const NavBar = Template.bind({});

NavBar.args = {
  clicked: false,
  handleToggle: () => {
    console.log('changed');
  },
};
