import styled from 'styled-components';

export const ProjectDetailWrapper = styled.main`
  box-sizing: border-box;
  padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 4rem);
  padding-top: clamp(10rem, 26vh, 16rem);
  width: 100%;
`;

export const DetailHeading = styled.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;

export const DetailMeta = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
`;

export const DetailMetaItem = styled.span`
  &:not(:last-child)::after {
    content: ' · ';
    margin: 0 0.25rem;
  }
`;

export const DetailTechnologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DetailTechnology = styled.li`
  list-style: none;
`;

export const DetailTechnologyLink = styled.a`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.25rem;
  color: inherit;
  display: inline-block;
  padding: 0.35rem 0.65rem;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const DetailLink = styled.a`
  align-self: flex-start;
  color: inherit;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  text-underline-offset: 0.2em;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const DetailHero = styled.div`
  aspect-ratio: 21 / 9;
  margin-bottom: clamp(2rem, 5vw, 4rem);
  overflow: hidden;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 3rem);

  @media (min-width: 768px) {
    display: grid;
    gap: clamp(2rem, 4vw, 3rem);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    &:first-of-type {
      grid-column: 1;
      grid-row: 1 / -1;
    }
  }
`;

export const DetailDescription = styled.div`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 65ch;

  em {
    font-style: italic;
  }
`;

export const DetailWhatIDidSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const DetailWhatIDidHeading = styled.h2`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const DetailWhatIDidContent = styled.div`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 65ch;

  em {
    font-style: italic;
  }
`;

export const DetailContentImage = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;
