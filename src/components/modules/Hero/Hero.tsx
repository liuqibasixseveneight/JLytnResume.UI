import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

import { FluidGradient, Header } from '../../ui';
import { HeroWrapper } from './Hero.styles';

export const Hero = () => {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const initSpline = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShowSpline(true);
        });
      });
    };

    const timer = setTimeout(initSpline, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroWrapper>
      <FluidGradient />
      <Header />

      {showSpline && (
        <div
          style={{
            inset: 0,
            position: 'absolute',
            zIndex: 1,
          }}
        >
          <Spline scene='https://prod.spline.design/LgCvlbGqUjH5hTlG/scene.splinecode' />
        </div>
      )}

      <h1
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 'clamp(3rem, 10vw, 12vw)',
          marginBottom: 'clamp(1.5rem, 8vh, 4rem)',
          letterSpacing: '-0.05em',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          userSelect: 'none',
          gap: '0.2em',
          zIndex: 10,
        }}
        data-speed='1.07'
        data-lag='0.006'
        data-delay='0.1'
      >
        <span style={{ fontWeight: 600 }}>Joshua</span>
        <span
          style={{
            fontStyle: 'italic',
            fontWeight: 400,
          }}
        >
          Layton
        </span>
      </h1>
    </HeroWrapper>
  );
};
