import { ProjectImageWrapper } from './ProjectImage.styles';
import type { ProjectImageProps } from './types';

export const ProjectImage = ({ alt, src, style, variant }: ProjectImageProps) => {
  return (
    <ProjectImageWrapper
      data-speed='0.99'
      data-lag='0.012'
      data-delay='0.15'
      style={style}
      $variant={variant}
    >
      <img alt={alt} src={src} />
    </ProjectImageWrapper>
  );
};
