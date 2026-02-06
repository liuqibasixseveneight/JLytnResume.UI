import styled from 'styled-components';

export const IntroWrapper = styled.section`
  height: 100%;
  /* min-height: 100vh; */
  padding: clamp(1.5rem, 4vw, 4rem);
  position: relative;
  width: 100%;
`;

export const IntroInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  max-width: 100%;
  padding: 0 clamp(1rem, 5vw, 8rem);
  width: fit-content;
`;

export const IntroHeading = styled.h1`
  font-size: clamp(1.75rem, 5vw + 2rem, 9rem);
  mix-blend-mode: difference;
  padding: clamp(1rem, 3vw, 4rem);
  white-space: pre-wrap;
`;

export const IntroWord = styled.span<{ $italic?: boolean }>`
  display: inline-block;
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  font-weight: ${({ $italic }) => ($italic ? '400' : 'normal')};
`;
