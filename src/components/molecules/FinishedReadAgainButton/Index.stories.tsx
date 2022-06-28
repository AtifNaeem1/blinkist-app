import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import baseTheme from '../../../theme/mainTheme';
import FinishAndRead from './Index';

export default {
  title: 'Molecules/FinishAndReadButton',
  component: FinishAndRead,
} as ComponentMeta<typeof FinishAndRead>;

const Template: ComponentStory<typeof FinishAndRead> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <FinishAndRead {...args} />
  </ThemeProvider>
);

export const FinishedButton = Template.bind({});
FinishedButton.args = {
  label: 'Finished',
  handleClick: {},
};

export const ReadAgainButton = Template.bind({});
ReadAgainButton.args = {
  label: 'Read again',
  handleClick: {},
};
