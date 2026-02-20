import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Footer, getProjectByName, ProjectDetail } from '../../modules';
import { Header } from '../../ui';
import { ProjectPageWrapper } from './Project.styles';

export const Project = () => {
  const { name } = useParams();

  const project = useMemo(() => getProjectByName(name), [name]);

  if (project == null) {
    return (
      <ProjectPageWrapper>
        <Header />
        <main style={{ padding: '4rem', textAlign: 'center' }}>
          <p>Project not found.</p>
          <Link to='/'>Back to home</Link>
        </main>
      </ProjectPageWrapper>
    );
  }

  return (
    <ProjectPageWrapper>
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </ProjectPageWrapper>
  );
};
