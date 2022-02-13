import { HTMLAttributes } from 'react';

export interface WrapperProps extends HTMLAttributes<Text> {
  color?: string
}

export interface TitleProps extends WrapperProps {
  tag?: 'h1' | 'h2' | 'h3'
  text: string
}
