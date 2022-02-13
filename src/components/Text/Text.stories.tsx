import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text as T } from './Text';

export default {
  title: 'Design System/Atoms/Text',
  component: T,
  args: {
    children: 'Text',
  },
} as ComponentMeta<typeof T>;

const Template: ComponentStory<typeof T> = (args) => <T {...args} />;

export const Default = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});
export const Colored = Template.bind({});
export const AsElement = Template.bind({});

Default.args = { ...Default.args };
Small.args = { size: 'small', children: 'Text small' };
Medium.args = { size: 'medium', children: 'Text medium' };
Large.args = { size: 'large', children: 'Text large' };
Colored.args = { color: '#252BBA', children: 'Text colored' };
AsElement.args = { as: 'span' };

