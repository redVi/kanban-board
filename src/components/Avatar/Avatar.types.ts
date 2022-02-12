export type AvatarSize = 'small' | 'normal' | 'big';

export interface WrapperProps {
  size?: AvatarSize
}

export interface AvatarProps extends WrapperProps {
  url?: string
}
