import { ProjectDisplayWrapper } from './ProjectDisplay.styles';
import type { ProjectDisplayProps } from './types';
import { ProjectImage } from '../../atoms';

export const ProjectDisplay = ({ imageAlt, imageSrc }: ProjectDisplayProps) => {
  return (
    <ProjectDisplayWrapper>
      <ProjectImage alt={imageAlt} src={imageSrc} variant='display' />
    </ProjectDisplayWrapper>
  );
};
