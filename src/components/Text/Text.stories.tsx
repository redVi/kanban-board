import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text as T } from './Text';

export default {
  title: 'Design System/Atoms/Text',
  component: T,
  args: {
    children: 'Text medium',
    size: 'medium',
    color: 'black',
  },
} as ComponentMeta<typeof T>;

const Template: ComponentStory<typeof T> = (args) => <T {...args} />;

export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});
export const ColoredText = Template.bind({});

Medium.args = { ...Medium.args };
Small.args = { size: 'small', children: 'Text small', as: 'p' };
Large.args = { size: 'large', children: 'Text large', as: 'span' };
ColoredText.args = { color: '#252BBA', children: 'Text colored' };

