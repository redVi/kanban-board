import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag as T } from './Tag';

export default {
  title: 'Design System/Tag',
  component: T,
  args: {
    text: 'Tag',
    kind: 'primary',
  },
} as ComponentMeta<typeof T>;

const Template: ComponentStory<typeof T> = (args) => <T {...args} />;

export const Tag = Template.bind({});

Tag.args = {
  ...Tag.args,
  handleClick: () => alert('Click on tag'),
};
