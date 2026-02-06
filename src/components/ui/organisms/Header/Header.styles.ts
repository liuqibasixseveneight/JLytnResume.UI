import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  left: 0;
  margin: clamp(1.5rem, 8vh, 4rem) auto 0 auto;
  max-width: 1200px;
  mix-blend-mode: difference;
  padding: 0 1rem;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10;

  & * {
    color: inherit;
  }
`;

export const HeaderBioText = styled.div`
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  text-align: center;
  user-select: none;
  width: 100%;
`;
