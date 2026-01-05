import { IntroWrapper } from './Intro.styles';
import type { IntroProps } from './types';

export const Intro = ({}: IntroProps) => {
  return (
    <IntroWrapper>
      <div>
        <h1
          style={{
            fontSize: '10rem',
            padding: '4rem',
            mixBlendMode: 'difference',
          }}
        >
          I’m a{' '}
          <span style={{ fontStyle: 'italic', fontWeight: '400' }}>
            Frontend Developer
          </span>{' '}
          with over six years of experience designing and building scalable,
          high-quality web experiences with a focus on{' '}
          <span style={{ fontStyle: 'italic', fontWeight: '400' }}>
            clarity, interaction, and craft
          </span>
          .
        </h1>
      </div>
    </IntroWrapper>
  );
};
