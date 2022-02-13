import { FC, memo } from 'react';
import { TitleProps } from './Text.types';
import * as s from './Text.styles';

export const Text: FC<TitleProps> = memo(({ as, size = 'medium', color, children, ...rest }) => {
  // @ts-ignore
  const TextType = s[size.toUpperCase()];

  return <TextType color={color} as={as} {...rest}>{children}</TextType>;
});

Text.displayName = 'Text';
