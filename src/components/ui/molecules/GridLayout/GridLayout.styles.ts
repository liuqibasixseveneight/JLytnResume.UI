import styled from 'styled-components';

export const GridLayoutWrapper = styled.div<{
  $cols: number;
  $rows: string | number;
}>`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  grid-template-rows: ${({ $rows }) =>
    typeof $rows === 'number' ? `repeat(${$rows}, 1fr)` : $rows};
  gap: 1rem;
  width: 100%;
`;

