import { ProjectTagsWrapper, ProjectTagSeparator } from './ProjectTags.styles';
import type { ProjectTagsProps } from './types';

export const ProjectTags = ({ disableParallax, style, tags }: ProjectTagsProps) => {
  return (
    <ProjectTagsWrapper
      {...(!disableParallax && {
        'data-delay': '0.125',
        'data-lag': '0.0105',
        'data-speed': '1.005',
      })}
      style={style}
    >
      {tags.flatMap((tag, index) => [
        <span key={`${tag}-${index}`}>{tag}</span>,
        ...(index < tags.length - 1
          ? [
              <ProjectTagSeparator key={`separator-${index}`}>
                {' + '}
              </ProjectTagSeparator>,
            ]
          : []),
      ])}
    </ProjectTagsWrapper>
  );
};
