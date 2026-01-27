import { ProjectDescriptionWrapper } from './ProjectDescription.styles';
import type { ProjectDescriptionProps } from './types';

export const ProjectDescription = ({ description, style }: ProjectDescriptionProps) => {
  return (
    <ProjectDescriptionWrapper
      data-speed='1.0'
      data-lag='0.011'
      data-delay='0.13'
      dangerouslySetInnerHTML={{ __html: description }}
      style={style}
    />
  );
};
