import { GridLayout } from '../../molecules';
import { SectionDividerWrapper, PlusSign } from './SectionDivider.styles';
import type { SectionDividerProps } from './types';

export const SectionDivider = ({
  count = 12,
  ...props
}: SectionDividerProps) => {
  return (
    <SectionDividerWrapper
      data-speed='1.08'
      data-lag='0.004'
      data-delay='0.08'
      {...props}
    >
      <GridLayout style={{ padding: '4rem 0 6rem 0' }}>
        {Array.from({ length: count }, (_, index) => (
          <PlusSign key={index}>+</PlusSign>
        ))}
      </GridLayout>
    </SectionDividerWrapper>
  );
};

