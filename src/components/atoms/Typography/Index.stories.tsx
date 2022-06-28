import TypographyComponent from './Index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import baseTheme from '../../../theme/mainTheme';
import { ThemeProvider } from '@emotion/react';

const TypographyComponentStory = {
  title: 'Atoms/TypographyComponent',
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (
  args
) => (
  <ThemeProvider theme={baseTheme}>
    <TypographyComponent {...args} />
  </ThemeProvider>
);

export const Header = Template.bind({});
Header.args = {
  children: 'Header',
  variant: 'h4',
};

export const Title = Template.bind({});
Title.args = {
  children: 'Title',
  variant: 'subtitle1',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: 'Subtitle',
  variant: 'subtitle2',
};

export const Body = Template.bind({});
Body.args = {
  children:
    'Lorem ipsum dolor sit amet,  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  variant: 'body1',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Caption',
  variant: 'caption',
};

export default TypographyComponentStory;
