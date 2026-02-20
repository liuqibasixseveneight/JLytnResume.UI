import {
  IntroInnerWrapper,
  IntroWrapper,
  IntroHeading,
  IntroWord,
} from './Intro.styles';
import type { IntroProps } from './types';

export const Intro = ({}: IntroProps) => {
  const text =
    "I'm a Frontend Developer with over six years of experience designing and building scalable, high-quality web experiences with a focus on clarity, interaction, and craft.";

  const words = text.split(' ');
  const clarityIndex = words.findIndex((w) => w.includes('clarity'));

  return (
    <IntroWrapper>
      <IntroInnerWrapper>
        <IntroHeading
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
