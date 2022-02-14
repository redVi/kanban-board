import styled from 'styled-components';
import { colors } from '@/typography';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  margin: 60px auto 20px; 
`;

export const Input = styled.input`
  border: 2px solid ${colors.smooth};
  margin-bottom: 12px;
  padding: 10px;
`;

export const Button = styled.input`
  background: ${colors.green};
  border: none;
  max-width: 300px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  color: ${colors.white};
  font-size: 20px;
  text-transform: uppercase;
`;

export const ErrorField = styled.span`
  margin: 3px 0;
  color: ${colors.red};
`;

export const Form = styled.form`
  margin: 0 20px 0 0;
`;
