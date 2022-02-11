import styled from 'styled-components';
import { colors } from 'typography';
import { tagType, WrapperProps } from './Tag.types';

export const Wrapper = styled.button<WrapperProps>`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  color: ${colors.light};
  border-radius: 2px;
  padding: 5px 10px;
  background-color: ${({ kind }) => kind ? tagType[kind] : colors.green};
`;
