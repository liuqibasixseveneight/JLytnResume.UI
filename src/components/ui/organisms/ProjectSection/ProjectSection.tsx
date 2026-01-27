import { GridLayout, ProjectContent, ProjectDisplay } from '../../molecules';
import { ProjectSectionWrapper } from './ProjectSection.styles';
import type { ProjectSectionProps } from './types';

export const ProjectSection = ({
  buttonText,
  contentImageAlt,
  contentImageSrc,
  description,
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
          description={description}
          imageAlt={contentImageAlt}
          imageSrc={contentImageSrc}
          onButtonClick={onButtonClick}
          tags={tags}
        />
        <ProjectDisplay imageAlt={displayImageAlt} imageSrc={displayImageSrc} />
      </GridLayout>
    </ProjectSectionWrapper>
  );
};
