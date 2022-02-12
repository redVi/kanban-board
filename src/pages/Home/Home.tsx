import { Fragment } from 'react';
import { Grid } from '@/components';
import * as s from './Home.styles';

const designBoard = () => (
  <Fragment key={1}>
    <h2>Design</h2>
    <span>First task</span>
    <span>Second task</span>
  </Fragment>
);

const devBoard = () => (
  <Fragment key={2}>
    <h2>Develop</h2>
    <span>First task</span>
    <span>Second task</span>
  </Fragment>
);

const qaBoard = () => (
  <Fragment key={3}>
    <h2>Qa</h2>
    <span>First</span>
    <span>Second</span>
  </Fragment>
);

const gridChildren = () => [designBoard(), devBoard(), qaBoard()];

export const Home = () => (
  <s.Wrapper>
    <Grid>
      {gridChildren()}
    </Grid>
  </s.Wrapper>
);
