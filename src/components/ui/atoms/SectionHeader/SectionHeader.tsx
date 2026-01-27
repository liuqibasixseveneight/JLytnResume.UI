import { SectionHeaderWrapper } from './SectionHeader.styles';
import type { SectionHeaderProps } from './types';

export const SectionHeader = ({
  children,
  ...props
}: SectionHeaderProps) => {
  return (
    <SectionHeaderWrapper
      data-speed='1.06'
      data-lag='0.009'
      data-delay='0.115'
      {...props}
    >
      {children}
    </SectionHeaderWrapper>
  );
};


