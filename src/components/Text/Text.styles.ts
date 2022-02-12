import styled from 'styled-components';
import { colors } from '@/typography';
import { WrapperProps } from './Text.types';

export const SMALL = styled.p<WrapperProps>`
  font-size: 12px;
  line-height: 18px;
  margin: 6px 0 0;
  color: ${props => props.color || colors.black};
`;

export const MEDIUM = styled.p<WrapperProps>`
  font-size: 16px;
  line-height: 21px;
  margin: 10px 0 0;
  color: ${props => props.color || colors.black};
`;

export const LARGE  = styled.p<WrapperProps>`
  font-size: 18px;
  line-height: 26px;
  margin: 14px 0 0;
  color: ${props => props.color || colors.black};
`;
