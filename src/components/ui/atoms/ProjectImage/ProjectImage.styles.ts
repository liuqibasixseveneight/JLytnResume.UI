import styled from 'styled-components';

export const ProjectImageWrapper = styled.div<{ $variant?: 'thumbnail' | 'display' }>`
  ${({ $variant }) =>
    $variant === 'display'
      ? `
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
  `
      : `
    height: auto;
    width: 100%;
  `}

  img {
    ${({ $variant }) =>
      $variant === 'display'
        ? `
      height: 100%;
      width: auto;
    `
        : `
      height: auto;
      width: 100%;
    `}
  }
`;
