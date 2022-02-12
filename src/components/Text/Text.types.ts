import { ElementType } from 'react';

export interface WrapperProps {
  color?: string
}

export interface TitleProps extends WrapperProps {
  as?: ElementType
  size?: 'small' | 'medium' | 'large'
}
