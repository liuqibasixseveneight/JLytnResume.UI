import { GridLayout, ProjectContent, ProjectDisplay } from '../../molecules';
import { ProjectSectionWrapper } from './ProjectSection.styles';
import type { ProjectSectionProps } from './types';

export const ProjectSection = ({
  buttonText,
  contentClassName,
  contentImageAlt,
  contentImageSrc,
  description,
  displayClassName,
  displayImageAlt,
  displayImageSrc,
  onButtonClick,
  tags,
}: ProjectSectionProps) => {
  return (
    <ProjectSectionWrapper>
      <GridLayout>
        <ProjectContent
          buttonText={buttonText}
          className={contentClassName}
          description={description}
          imageAlt={contentImageAlt}
          imageSrc={contentImageSrc}
          onButtonClick={onButtonClick}
          tags={tags}
        />
        <ProjectDisplay
          className={displayClassName}
          imageAlt={displayImageAlt}
          imageSrc={displayImageSrc}
        />
      </GridLayout>
    </ProjectSectionWrapper>
  );
};
