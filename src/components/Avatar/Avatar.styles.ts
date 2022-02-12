import styled from 'styled-components';
import { WrapperProps, AvatarSize } from './Avatar.types';

const getSize = (size: AvatarSize | undefined) => {
  switch (size) {
    case 'big': return 44;
    case 'small': return 24;
    default: return 34;
  }
};

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ size }) => `${getSize(size)}px`};
  height: ${({ size }) => `${getSize(size)}px`};
  background-size: cover;
`;
