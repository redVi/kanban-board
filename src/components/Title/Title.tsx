import { FC, memo } from 'react';
import { TitleProps } from './Title.types';
import * as s from './Title.styles';

export const Title: FC<TitleProps> = memo(({ tag = 'h1', text, color, ...rest }) => {
  // @ts-ignore
  const TitleTag = s[tag.toUpperCase()];

  return <TitleTag color={color} text='s' {...rest}>{text}</TitleTag>;
});

Title.displayName = 'Title';
