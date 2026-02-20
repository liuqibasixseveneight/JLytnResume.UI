export type ProjectTechnology = {
  name: string;
  url: string;
};

export type ProjectDataItem = {
  buttonText?: string;
  contentImageAlt: string;
  contentImageSrc: string;
  description: string;
  displayImageAlt: string;
  displayImageSrc: string;
  heading: string;
  id: number;
  industry: string;
  linkUrl?: string;
  name: string;
  onButtonClick?: () => void;
  projectName: string;
  role?: string;
  tags: string[];
  technologies?: ProjectTechnology[];
  whatIDid?: string;
};

export type ProjectsProps = {
  projects?: ProjectDataItem[];
};
