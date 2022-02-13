import { FC, memo } from 'react';
import * as s from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag: FC<TagProps> = memo(({
  text = '',
  kind = 'android',
  handleClick,
  ...rest
  }) => (
  <s.Wrapper kind={kind} onClick={handleClick} {...rest}>
    {text}
  </s.Wrapper>
));

Tag.displayName = 'Tag';
