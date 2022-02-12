import { Fragment } from 'react';
import { Grid, Card, Tag, Avatar, Title, Text } from '@/components';
import * as s from './Home.styles';

const qaBoard = () => (
  <Fragment key={3}>
    <h2>Qa</h2>
    <Card
      Header={<Tag text='android' kind='android' />}
      Footer={<Avatar />}
    />
    <Card
      Header={<Tag text='iOS' kind='ios' />}
      Footer={<Avatar />}
    >
      <Title text='Task' />
      <Text>Description</Text>
    </Card>
  </Fragment>
);

const gridChildren = () => [qaBoard()];

export const Home = () => (
  <s.Wrapper>
    <Grid>
      {gridChildren()}
    </Grid>
  </s.Wrapper>
);
