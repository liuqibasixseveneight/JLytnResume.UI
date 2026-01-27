import { useEffect, useRef, type ComponentType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import type { WithLenisOptions } from './types';

gsap.registerPlugin(ScrollTrigger);

export const withLenis = <P extends object>(
  Component: ComponentType<P>,
  options: WithLenisOptions = {}
) => {
  const {
    duration = 1.2,
    gestureOrientation = 'vertical',
    wheelMultiplier = 0.6,
    touchMultiplier = 0.8,
  } = options;

  return (props: P) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
      const lenis = new Lenis({
        duration,
        gestureOrientation,
        wheelMultiplier,
        touchMultiplier,
      });

      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove((time) => lenis.raf(time * 1000));
        lenis.destroy();
      };
    }, [duration, gestureOrientation, wheelMultiplier, touchMultiplier]);

    return <Component {...props} />;
  };
};
