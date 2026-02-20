import { GridLayout, ProjectContent, ProjectDisplay } from '../../molecules';
import { ProjectSectionWrapper } from './ProjectSection.styles';
import type { ProjectSectionProps } from './types';

export const ProjectSection = (props: ProjectSectionProps) => {
  const {
    project,
    buttonText = project?.buttonText,
    contentClassName,
    contentImageAlt = project?.contentImageAlt ?? '',
    contentImageSrc = project?.contentImageSrc ?? '',
    description = project?.description ?? '',
    displayClassName,
    displayImageAlt = project?.displayImageAlt ?? '',
    displayImageSrc = project?.displayImageSrc ?? '',
    onButtonClick = project?.onButtonClick,
    tags = project?.tags ?? [],
  } = props;

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
