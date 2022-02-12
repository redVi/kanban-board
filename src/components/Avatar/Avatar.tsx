import { FC, memo } from 'react';
import AssigneeSvg from '@/assets/images/assignee.svg';
import { AvatarProps } from './Avatar.types';
import * as s from './Avatar.styles';

export const Avatar: FC<AvatarProps> = memo(({ url, size = 'small' }) => (
  <s.Wrapper
    size={size}
    style={{ backgroundImage: `url(${url || AssigneeSvg})` }}
  />
));

Avatar.displayName = 'Avatar';
