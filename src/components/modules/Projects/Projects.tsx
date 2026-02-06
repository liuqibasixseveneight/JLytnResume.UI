import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { ProjectBlock } from '../../ui/molecules';
import { SectionDivider, SectionHeader } from '../../ui';
import { ProjectsWrapper } from './Projects.styles';
import { projectsData } from './projectsData';
import type { ProjectsProps } from './types';

gsap.registerPlugin(ScrollTrigger);

export const Projects = ({ projects = projectsData }: ProjectsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const divider = section.querySelector('.projects-divider');
      const header = section.querySelector('.projects-header');

      const elements = [divider, header].filter(Boolean) as HTMLElement[];
      if (elements.length === 0) return;

      gsap.set(elements, {
        opacity: 0,
        willChange: 'transform, opacity',
        y: 8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          end: 'bottom top',
          scrub: 1.2,
          start: 'top 85%',
          trigger: section,
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
    },
    { scope: sectionRef }
  );

  return (
    <ProjectsWrapper>
      <div ref={sectionRef}>
        <SectionDivider className='projects-divider' />
        <SectionHeader className='projects-header'>Projects</SectionHeader>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh' }}>
          {projects?.map((project, index) => (
            <ProjectBlock
              key={`${project?.id}-${project?.name}-${index}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </ProjectsWrapper>
  );
};
