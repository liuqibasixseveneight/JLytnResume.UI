import { useEffect, useState } from 'react';

import Spline from '@splinetool/react-spline';

import { FluidGradient, Header } from '../../ui';
import { HomeWrapper } from './Home.styles';

export const Home = () => {
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
    <HomeWrapper>
      <FluidGradient />
      <Header />

      {showSpline && (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Spline scene="https://prod.spline.design/l3BuZOVIbZFnsYnP/scene.splinecode" />
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
          userSelect: 'none',
          gap: '0.2em',
          zIndex: '2',
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
    </HomeWrapper>
  );
};
