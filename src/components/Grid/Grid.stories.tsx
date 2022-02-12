import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid as G } from './Grid';

const designBoard = () => (
  <>
    <h2>Design</h2>
    <span>First task</span>
    <span>Second task</span>
  </>
);

const devBoard = () => (
  <>
    <h2>Develop</h2>
    <span>First task</span>
    <span>Second task</span>
  </>
);

const qaBoard = () => (
  <>
    <h2>Qa</h2>
    <span>First</span>
    <span>Second</span>
  </>
);

export default {
  title: 'Design System/Organisms/Grid',
  component: G,
  args: {
    children: [designBoard(), devBoard(), qaBoard()],
  },
} as ComponentMeta<typeof G>;

const Template: ComponentStory<typeof G> = (args) => <G {...args} />;

export const Grid = Template.bind({});

Grid.args = { ...Grid.args };

