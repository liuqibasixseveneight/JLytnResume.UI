import { Contact, Footer, Projects as ProjectsSection } from '../../modules';
import { Header } from '../../ui';
import { ProjectsPageWrapper } from './Projects.styles';

export const Projects = () => {
  return (
    <ProjectsPageWrapper>
      <Header />
      <ProjectsSection />
      <Contact />
      <Footer />
    </ProjectsPageWrapper>
  );
};
