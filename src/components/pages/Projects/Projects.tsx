import {
  ProjectSection,
  SectionDivider,
  SectionHeader,
  SectionHeading,
} from '../../ui';
import { ProjectsWrapper } from './Projects.styles';
import { projectsData } from './projectsData';
import type { ProjectsProps } from './types';

export const Projects = ({ projects = projectsData }: ProjectsProps) => {
  return (
    <ProjectsWrapper>
      <SectionDivider />
      <SectionHeader>Projects</SectionHeader>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh' }}>
        {projects?.map((project, index) => (
          <div key={`${project?.id}-${project?.name}-${index}`}>
            <SectionHeading>{project.heading}</SectionHeading>
            <ProjectSection
              buttonText={project.buttonText}
              contentImageAlt={project.contentImageAlt}
              contentImageSrc={project.contentImageSrc}
              description={project.description}
              displayImageAlt={project.displayImageAlt}
              displayImageSrc={project.displayImageSrc}
              onButtonClick={project.onButtonClick}
              tags={project.tags}
            />
          </div>
        ))}
      </div>
    </ProjectsWrapper>
  );
};
