import type { ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type Props = {
  children: ReactNode;
};

export const SmoothLayout = ({ children }: Props) => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      smoothTouch: 0.2,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  );
};
