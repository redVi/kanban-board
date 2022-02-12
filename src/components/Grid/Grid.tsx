import { FC, Children, cloneElement, isValidElement } from 'react';
import * as s from './Grid.styles';

export const Grid: FC = ({ children }) => (
  <s.Wrapper>
    {Children.map(children, child => {
      if (!isValidElement(child)) return null;

      return (
        <s.Cell>
          {cloneElement(child)}
        </s.Cell>
      );
    })}
  </s.Wrapper>
);
