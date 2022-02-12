import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title as T } from './Title';

export default {
  title: 'Design System/Atoms/Title',
  component: T,
  args: {
    text: 'Title h1',
    tag: 'h1',
    color: 'black',
  },
} as ComponentMeta<typeof T>;

const Template: ComponentStory<typeof T> = (args) => <T {...args} />;

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const ColoredTitle = Template.bind({});

H1.args = { ...H1.args };
H2.args = { tag: 'h2', text: 'Title h2' };
H3.args = { tag: 'h3', text: 'Title h3' };
ColoredTitle.args = { color: 'pink' };

