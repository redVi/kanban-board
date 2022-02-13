import { HTMLAttributes } from 'react';
export type AvatarSize = 'small' | 'normal' | 'big';

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize
}

export interface AvatarProps extends WrapperProps {
  url?: string
}
