import { FC, memo } from 'react';
import * as s from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag: FC<TagProps> = memo(({
  text = '',
  kind = 'primary',
  handleClick,
}) => (
  <s.Wrapper kind={kind} onClick={handleClick}>
    {text}
  </s.Wrapper>
));

Tag.displayName = 'Tag';
