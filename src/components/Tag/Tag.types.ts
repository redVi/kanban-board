import { colors } from '@/typography';

export const tagType = {
  android: colors.green,
  design: colors.violet,
  qa: colors.black,
  ios: colors.orange,
};

export interface WrapperProps {
  kind?: keyof typeof tagType,
  handleClick?: (payload: unknown) => void
}

export interface TagProps extends WrapperProps {
  text: string,
}
