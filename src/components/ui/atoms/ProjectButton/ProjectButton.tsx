import { ProjectButtonWrapper } from './ProjectButton.styles';
import type { ProjectButtonProps } from './types';

export const ProjectButton = ({ children, onClick, style }: ProjectButtonProps) => {
  return (
    <ProjectButtonWrapper
      data-speed='1.008'
      data-lag='0.009'
      data-delay='0.12'
      onClick={onClick}
      style={style}
    >
      {children}
    </ProjectButtonWrapper>
  );
};
