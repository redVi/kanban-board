import { colors } from '@/typography';
import { ButtonHTMLAttributes } from 'react';

export const tagType = {
  android: colors.green,
  web: colors.violet,
  analytics: colors.black,
  ios: colors.orange,
};

export interface WrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: keyof typeof tagType,
  handleClick?: (payload: unknown) => void
}

export interface TagProps extends WrapperProps {
  text: string,
}
