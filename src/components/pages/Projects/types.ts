export type ProjectDataItem = {
  buttonText?: string;
  contentImageAlt: string;
  contentImageSrc: string;
  description: string;
  displayImageAlt: string;
  displayImageSrc: string;
  heading: string;
  id: number;
  name: string;
  onButtonClick?: () => void;
  tags: string[];
};

export type ProjectsProps = {
  projects?: ProjectDataItem[];
};
