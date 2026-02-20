import { ProjectTags } from '../../ui/atoms';
import {
  DetailBlock,
  DetailContent,
  DetailContentImage,
  DetailDescription,
  DetailHeading,
  DetailHero,
  DetailLink,
  DetailMeta,
  DetailMetaItem,
  DetailTechnologies,
  DetailTechnology,
  DetailTechnologyLink,
  DetailWhatIDidContent,
  DetailWhatIDidHeading,
  DetailWhatIDidSection,
  ProjectDetailWrapper,
} from './ProjectDetail.styles';
import type { ProjectDetailProps } from './types';

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <ProjectDetailWrapper>
      <DetailHeading className='detail-heading'>
        {project.heading}
      </DetailHeading>

      <DetailMeta>
        {project.industry && (
          <DetailMetaItem>{project.industry}</DetailMetaItem>
        )}
        {project.role && <DetailMetaItem>{project.role}</DetailMetaItem>}
      </DetailMeta>

      <DetailHero className='detail-hero'>
        <img alt={project.displayImageAlt} src={project.displayImageSrc} />
      </DetailHero>

      <DetailContent>
        <DetailBlock className='detail-block'>
          <ProjectTags disableParallax tags={project.tags} />
          {project.technologies && project.technologies.length > 0 && (
            <DetailTechnologies>
              {project.technologies.map((tech, i) => (
                <DetailTechnology key={`${tech.name}-${i}`}>
                  <DetailTechnologyLink
                    href={tech.url}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {tech.name}
                  </DetailTechnologyLink>
                </DetailTechnology>
              ))}
            </DetailTechnologies>
          )}
          <DetailDescription
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          {project.whatIDid && (
            <DetailWhatIDidSection>
              <DetailWhatIDidHeading>What I did</DetailWhatIDidHeading>
              <DetailWhatIDidContent
                dangerouslySetInnerHTML={{ __html: project.whatIDid }}
              />
            </DetailWhatIDidSection>
          )}
          {project.linkUrl && (
            <DetailLink
              href={project.linkUrl}
              rel='noopener noreferrer'
              target='_blank'
            >
              View project →
            </DetailLink>
          )}
        </DetailBlock>
        <DetailContentImage className='detail-content-image'>
          <img alt={project.contentImageAlt} src={project.contentImageSrc} />
        </DetailContentImage>
      </DetailContent>
    </ProjectDetailWrapper>
  );
};
