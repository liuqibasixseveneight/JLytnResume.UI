import styled from 'styled-components';

export const IntroWrapper = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: 4rem;
  position: relative;
  width: 100%;
`;

export const IntroInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  padding: 0 8rem;
  width: fit-content;
  max-width: 100%;
`;

export const IntroHeading = styled.h1`
  font-size: 12rem;
  mix-blend-mode: difference;
  padding: 4rem;
  white-space: pre-wrap;
`;

export const IntroWord = styled.span<{ $italic?: boolean }>`
  display: inline-block;
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  font-weight: ${({ $italic }) => ($italic ? '400' : 'normal')};
`;
