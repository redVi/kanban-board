import styled from 'styled-components';
import { colors } from '@/typography';
import { WrapperProps } from './Title.types';

export const H1 = styled.h1<WrapperProps>`
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: ${props => props.color || colors.black};
`;

export const H2 = styled.h2<WrapperProps>`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: ${props => props.color || colors.black};
`;

export const H3  = styled.h3<WrapperProps>`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.color || colors.black};
`;
