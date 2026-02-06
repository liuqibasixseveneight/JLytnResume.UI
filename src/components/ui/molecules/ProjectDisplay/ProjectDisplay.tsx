import { ProjectDisplayWrapper } from './ProjectDisplay.styles';
import type { ProjectDisplayProps } from './types';
import { ProjectImage } from '../../atoms';

export const ProjectDisplay = ({
  className,
  imageAlt,
  imageSrc,
}: ProjectDisplayProps) => {
  return (
    <ProjectDisplayWrapper className={className}>
      <ProjectImage alt={imageAlt} src={imageSrc} variant='display' />
    </ProjectDisplayWrapper>
  );
};
