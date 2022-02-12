import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar as A } from './Avatar';

export default {
  title: 'Design System/Atoms/Avatar',
  component: A,
  args: {
    size: 'small',
  },
} as ComponentMeta<typeof A>;

const Template: ComponentStory<typeof A> = (args) => <A {...args} />;

export const Avatar = Template.bind({});
export const CustomAvatar = Template.bind({});
export const Small = Template.bind({});
export const Normal = Template.bind({});
export const Big = Template.bind({});

Avatar.args = { ...Avatar.args };
CustomAvatar.args = {
  ...CustomAvatar.args,
  url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png',
};
Small.args = { size: 'small' };
Normal.args = { size: 'normal' };
Big.args = { size: 'big' };
