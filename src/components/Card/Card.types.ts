import { ElementType, ReactNode, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  Header?: ElementType | ReactNode
  Footer?: ElementType | ReactNode
}
