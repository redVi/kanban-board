import styled from 'styled-components';
import { colors, device } from '@/typography';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px 30px;
  grid-auto-columns: minmax(240px, 1fr);
  grid-auto-flow: row;
  
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media ${device.laptop} {
    grid-template-columns: repeat(4, minmax(200px, 400px));
  }
  
  @media ${device.desktop} {
    grid-template-columns: none;
    grid-auto-flow: column;
  }
`;

export const Cell = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 10px;
  padding: 10px 15px;
  background-color: ${colors.smooth};
`;
