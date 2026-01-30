import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import {
  IntroInnerWrapper,
  IntroWrapper,
  IntroHeading,
  IntroWord,
} from './Intro.styles';
import type { IntroProps } from './types';

gsap.registerPlugin(ScrollTrigger);

export const Intro = ({}: IntroProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      const words = headingRef.current.querySelectorAll('.intro-word');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end: '+=100%',
          scrub: true,
        },
      });

      gsap.set(words, { opacity: 0, y: 24 });

      tl.to(words, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.02,
      });
    },
    { scope: headingRef },
  );

  const text =
    "I'm a Frontend Developer with over six years of experience designing and building scalable, high-quality web experiences with a focus on clarity, interaction, and craft.";

  const words = text.split(' ');
  const clarityIndex = words.findIndex((w) => w.includes('clarity'));

  return (
    <IntroWrapper>
      <IntroInnerWrapper>
        <IntroHeading
          ref={headingRef}
          data-speed='1.04'
          data-lag='0.008'
          data-delay='0.11'
        >
          {words.map((word, index) => {
            const isItalic =
              word.includes('Frontend') ||
              word.includes('Developer') ||
              (index >= clarityIndex && clarityIndex !== -1);

            const content = index < words.length - 1 ? word + ' ' : word;

            return (
              <IntroWord key={index} $italic={isItalic} className='intro-word'>
                {content}
              </IntroWord>
            );
          })}
        </IntroHeading>
      </IntroInnerWrapper>
    </IntroWrapper>
  );
};
