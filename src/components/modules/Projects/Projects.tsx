import { useNavigate } from 'react-router-dom';

import { ProjectBlock } from '../../ui/molecules';
import { SectionDivider, SectionHeader } from '../../ui';
import { ProjectsWrapper } from './Projects.styles';
import { projectsData } from './projectsData';
import type { ProjectsProps } from './types';

export const Projects = ({ projects = projectsData }: ProjectsProps) => {
  const navigate = useNavigate();

  return (
    <ProjectsWrapper>
      <div>
        <SectionDivider className='projects-divider' />
        <SectionHeader className='projects-header'>Projects</SectionHeader>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh' }}>
          {projects?.map((project, index) => (
            <div
              key={`${project?.id}-${project?.name}-${index}`}
              data-project-name={project.name}
            >
              <ProjectBlock
                project={{
                  ...project,
                  onButtonClick: () => {
                    sessionStorage.setItem('scrollToProject', project.name);
                    navigate(`/project/${encodeURIComponent(project.name)}`);
                  },
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </ProjectsWrapper>
  );
};
