import AvatarIcon from './Index';

import { ComponentMeta } from '@storybook/react';

export default {
  title: 'molecules/AvatarWithIcon',
  component: AvatarIcon,
} as ComponentMeta<typeof AvatarIcon>;

export const AvatarWithIcon = (
  <AvatarIcon
    logClick={true}
    handleLogin={() => {
      console.log('Avatar With icon');
    }}
  />
);
