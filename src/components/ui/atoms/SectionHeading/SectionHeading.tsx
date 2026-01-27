import { SectionHeadingWrapper } from './SectionHeading.styles';
import type { SectionHeadingProps } from './types';

export const SectionHeading = ({
  children,
  ...props
}: SectionHeadingProps) => {
  return (
    <SectionHeadingWrapper
      data-speed='1.01'
      data-lag='0.01'
      data-delay='0.12'
      {...props}
    >
      {children}
    </SectionHeadingWrapper>
  );
};


