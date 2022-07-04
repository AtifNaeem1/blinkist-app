import { ThemeProvider } from '@mui/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EntrepreneurBanner from './Index';
import baseTheme from '../../../theme/mainTheme';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organism/EntrepreneurshipBanner',
  component: EntrepreneurBanner,
} as ComponentMeta<typeof EntrepreneurBanner>;

const Template: ComponentStory<typeof EntrepreneurBanner> = () => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <EntrepreneurBanner />
    </MemoryRouter>
  </ThemeProvider>
);

export const EntrepreneurshipBanner = Template.bind({});
