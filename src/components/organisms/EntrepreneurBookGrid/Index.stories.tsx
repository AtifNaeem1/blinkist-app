import { ThemeProvider } from '@mui/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EntrepreneurBookGrid from './Index';
import baseTheme from '../../../theme/mainTheme';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organism/EntrepreneurshipBookGrid',
  component: EntrepreneurBookGrid,
} as ComponentMeta<typeof EntrepreneurBookGrid>;

const Template: ComponentStory<typeof EntrepreneurBookGrid> = (
  args
) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <EntrepreneurBookGrid {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const EntrepreneurshipGrid = Template.bind({});
EntrepreneurshipGrid.args = {
  title: 'Trending blinks',
  subCategory: 'Trending blinks',
};
