import { ThemeProvider } from '@mui/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Explore from './Index';
import baseTheme from '../../../theme/mainTheme';

export default {
  title: 'organism/ExploreMenu',
  component: Explore,
} as ComponentMeta<typeof Explore>;

const Template: ComponentStory<typeof Explore> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <Explore {...args} />
  </ThemeProvider>
);

export const ExploreMenu = Template.bind({});
ExploreMenu.args = {
  handleChange: () => {},
};
