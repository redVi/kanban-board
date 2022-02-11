import { colors } from '@/typography';

export const tagType = {
  primary: colors.green,
  secondary: colors.violet,
  black: colors.black,
  bright: colors.orange,
};

export interface WrapperProps {
  kind?: keyof typeof tagType,
  handleClick?: (payload: unknown) => void
}

export interface TagProps extends WrapperProps {}
