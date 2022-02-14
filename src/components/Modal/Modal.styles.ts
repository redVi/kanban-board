import styled, { keyframes } from 'styled-components';
import { colors } from '@/typography';
import closeButton from '@/assets/images/close.svg';

const colorMe = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  min-width: 300px;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  background: ${colors.white};
  animation: ${colorMe} 0.5s linear;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  color: transparent;
  background-image: url(${closeButton});
  position: absolute;
  left: 10px;
  top: 10px;
`;
