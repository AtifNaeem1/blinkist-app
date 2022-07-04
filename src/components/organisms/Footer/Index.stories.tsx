import { ThemeProvider } from '@mui/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Index';
import baseTheme from '../../../theme/mainTheme';

export default {
  title: 'organism/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <ThemeProvider theme={baseTheme}>
    <Footer />
  </ThemeProvider>
);

export const FooterPart = Template.bind({});
