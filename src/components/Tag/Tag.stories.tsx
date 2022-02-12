import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag as T } from './Tag';

export default {
  title: 'Design System/Atoms/Tag',
  component: T,
  args: {
    text: 'Design',
    kind: 'design',
  },
} as ComponentMeta<typeof T>;

const Template: ComponentStory<typeof T> = (args) => <T {...args} />;

export const Design = Template.bind({});
export const Android = Template.bind({});
export const ios = Template.bind({});
export const qa = Template.bind({});

Design.args = {
  ...Design.args,
  handleClick: () => alert('Click on tag'),
};
Android.args = { kind: 'android', text: 'Android' };
ios.args = { kind: 'ios', text: 'iOS' };
qa.args = { kind: 'qa', text: 'qa' };
