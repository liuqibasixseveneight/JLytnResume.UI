import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { SectionHeading } from '../../atoms';
import { ProjectSection } from '../../organisms';
import type { ProjectBlockProps } from './types';

gsap.registerPlugin(ScrollTrigger);

export const ProjectBlock = ({ project }: ProjectBlockProps) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      requestAnimationFrame(() => {
        const block = blockRef.current;
        if (!block) return;

        const heading = block.querySelector('.project-block-heading');
        const content = block.querySelector('.project-block-content');
        const display = block.querySelector('.project-block-display');

        const elements = [heading, content, display].filter(
          Boolean
        ) as HTMLElement[];

        if (elements.length === 0) return;

        gsap.set(elements, {
          immediateRender: false,
          opacity: 0,
          y: 8,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            end: 'bottom top',
            scrub: 1.2,
            start: 'top 85%',
            trigger: block,
          },
        });

        tl.fromTo(
          elements,
          { opacity: 0, y: 8 },
          {
            duration: 0.32,
            ease: 'power2.out',
            force3D: true,
            opacity: 1,
            stagger: 0.02,
            y: 0,
          },
          0
        ).fromTo(
          elements,
          { opacity: 1, y: 0 },
          {
            duration: 0.32,
            ease: 'power2.in',
            force3D: true,
            opacity: 0,
            y: -8,
          },
          0.68
        );
      });
    },
    { scope: blockRef }
  );

  return (
    <div ref={blockRef}>
      <SectionHeading
        className='project-block-heading'
        style={{ opacity: 0, transform: 'translateY(8px)' }}
      >
        {project.heading}
      </SectionHeading>
      <ProjectSection
        buttonText={project.buttonText}
        contentClassName='project-block-content'
        contentImageAlt={project.contentImageAlt}
        contentImageSrc={project.contentImageSrc}
        description={project.description}
        displayClassName='project-block-display'
        displayImageAlt={project.displayImageAlt}
        displayImageSrc={project.displayImageSrc}
        onButtonClick={project.onButtonClick}
        tags={project.tags}
      />
    </div>
  );
};
