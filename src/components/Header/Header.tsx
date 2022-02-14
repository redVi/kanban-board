import { FC } from 'react';
import * as s from './Header.styles';

export const Header: FC = ({ children }) => (
  <s.Wrapper>
    {children}
  </s.Wrapper>
);
