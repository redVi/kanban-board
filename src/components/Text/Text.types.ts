import { ElementType, HTMLAttributes } from 'react';

export interface WrapperProps extends HTMLAttributes<Text> {
  color?: string
}

export interface TitleProps extends WrapperProps {
  as?: ElementType
  size?: 'small' | 'medium' | 'large'
}
