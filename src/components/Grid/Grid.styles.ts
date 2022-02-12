import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px 40px;
  border: 1px slid red;
  grid-auto-columns: 240px;
  grid-auto-flow: column;
`;

export const Cell = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 10px;
  padding: 10px 15px;
`;
