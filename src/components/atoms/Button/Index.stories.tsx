import { ThemeProvider } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonComponent from './Index';
import baseTheme from '../../../theme/mainTheme';

const ButtonStory = {
  title: 'Atoms/ButtonComponent',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <ButtonComponent {...args} />
  </ThemeProvider>
);

export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  children: 'Primary',
  variant: 'outlined',
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  disabled: true,
  children: 'Primary Disabled',
};

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: 'contained',
  children: 'Contained',
};

export default ButtonStory;
