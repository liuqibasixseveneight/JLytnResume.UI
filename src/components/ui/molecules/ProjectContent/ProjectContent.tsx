import { ProjectContentWrapper } from './ProjectContent.styles';
import type { ProjectContentProps } from './types';
import {
  ProjectButton,
  ProjectDescription,
  ProjectImage,
  ProjectTags,
} from '../../atoms';

export const ProjectContent = ({
  buttonText,
  className,
  description,
  imageAlt,
  imageSrc,
  onButtonClick,
  tags,
}: ProjectContentProps) => {
  return (
    <ProjectContentWrapper className={className}>
      <ProjectImage alt={imageAlt} src={imageSrc} variant='thumbnail' />
      <ProjectTags style={{ marginTop: '1rem' }} tags={tags} />
      <ProjectDescription description={description} />
      {buttonText && (
        <ProjectButton onClick={onButtonClick} style={{ marginTop: '2rem' }}>
          {buttonText}
        </ProjectButton>
      )}
    </ProjectContentWrapper>
  );
};
