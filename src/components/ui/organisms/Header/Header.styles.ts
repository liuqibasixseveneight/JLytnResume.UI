import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  margin: 4rem auto 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const HeaderBioText = styled.div`
  font-size: clamp(1.5rem, 4vw + 1rem, 4rem);
  mix-blend-mode: difference;
  text-align: center;
  width: 100%;
`;
