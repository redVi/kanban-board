import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar, Tag, Text, Title, Card as C } from '@/components';

export default {
  title: 'Design System/Organisms/Card',
  component: C,
  args: {
    Header: <Tag kind='android' text='android' />,
    children: (
      <>
        <Title tag='h2' text='Sidebar fix' />
        <Text color='gray'>
          Fix sidebar on the Android menu.<br/>
          <Text as='span' color='black'>Current behaviour:</Text> sidebar opens from the left.<br/>
          <Text as='span' color='black'>Expected behaviour:</Text> sidebar opens from the right.
        </Text>
      </>
    ),
    Footer: <Avatar />,
  },
} as ComponentMeta<typeof C>;

const Template: ComponentStory<typeof C> = (args) => <C {...args} />;

export const Card = Template.bind({});

Card.args = { ...Card.args };
