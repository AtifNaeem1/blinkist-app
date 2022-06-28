import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Index';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const loginAvatar = Template.bind({});
loginAvatar.args = {
  children: 'A',
};
