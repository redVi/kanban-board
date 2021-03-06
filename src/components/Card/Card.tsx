import { FC } from 'react';
import { CardProps } from './Card.types';
import * as s from './Card.styles';

export const Card: FC<CardProps> = ({ Header, Footer, children, ...rest }) => (
  <s.Wrapper {...rest}>
    {Header ? <s.Header>{Header}</s.Header> : null}
    {children}
    {Footer ? <s.Footer>{Footer}</s.Footer> : null
    }
  </s.Wrapper>
);
