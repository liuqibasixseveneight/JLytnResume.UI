import { SectionHeading } from '../../atoms';
import { ProjectSection } from '../../organisms';
import type { ProjectBlockProps } from './types';

export const ProjectBlock = ({ project }: ProjectBlockProps) => {
  return (
    <div>
      <SectionHeading className='project-block-heading'>
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
