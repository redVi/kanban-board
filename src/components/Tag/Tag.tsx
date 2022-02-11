import { FC, memo } from 'react';
import * as s from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag: FC<TagProps> = memo(({ kind, handleClick }) => (
  <s.Wrapper kind={kind} onClick={handleClick}>
    {kind} tag
  </s.Wrapper>
));

Tag.displayName = 'Tag';
