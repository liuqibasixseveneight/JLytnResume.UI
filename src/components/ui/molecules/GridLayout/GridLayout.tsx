import { GridLayoutWrapper } from './GridLayout.styles';
import type { GridLayoutProps } from './types';

export const GridLayout = ({
  cols = 12,
  rows = 'auto',
  children,
  ...props
}: GridLayoutProps) => {
  return (
    <GridLayoutWrapper $cols={cols} $rows={rows} {...props}>
      {children}
    </GridLayoutWrapper>
  );
};

