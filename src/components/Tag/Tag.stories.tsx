import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag as T } from './Tag';

export default {
  title: 'Design System/Atoms/Tag',
  component: T,
  args: {
    text: 'Tag',
  },
} as ComponentMeta<typeof T>;

const Template: ComponentStory<typeof T> = (args) => <T {...args} />;

export const Default = Template.bind({});
export const android = Template.bind({});
export const ios = Template.bind({});
export const web = Template.bind({});
export const analytics = Template.bind({});

Default.args = { ...Default.args, handleClick: () => alert('Click on tag') };
android.args = { kind: 'android', text: 'Android' };
ios.args = { kind: 'ios', text: 'iOS' };
web.args = { kind: 'web', text: 'Web' };
analytics.args = { kind: 'analytics', text: 'Analytics' };
