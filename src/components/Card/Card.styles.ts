import styled from 'styled-components';
import { colors } from '@/typography';

export const Wrapper = styled.section`
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  padding: 16px;
  background-color: ${colors.white};
`;

export const Header = styled.header`
  padding-bottom: 8px;
`;

export const Footer = styled.footer`
  padding: 16px 16px 0px 0;
`;
