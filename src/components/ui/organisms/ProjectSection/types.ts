export type ProjectSectionProject = {
  buttonText?: string;
  contentImageAlt: string;
  contentImageSrc: string;
  description: string;
  displayImageAlt: string;
  displayImageSrc: string;
  onButtonClick?: () => void;
  tags: string[];
};

export type ProjectSectionProps = {
  buttonText?: string;
  contentClassName?: string;
  contentImageAlt?: string;
  contentImageSrc?: string;
  description?: string;
  displayClassName?: string;
  displayImageAlt?: string;
  displayImageSrc?: string;
  onButtonClick?: () => void;
  project?: ProjectSectionProject;
  tags?: string[];
};
