export type ProjectSectionProps = {
  buttonText?: string;
  contentClassName?: string;
  contentImageAlt: string;
  contentImageSrc: string;
  description: string;
  displayClassName?: string;
  displayImageAlt: string;
  displayImageSrc: string;
  onButtonClick?: () => void;
  tags: string[];
};
