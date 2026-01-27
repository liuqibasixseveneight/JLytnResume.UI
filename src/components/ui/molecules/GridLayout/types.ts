import type { HTMLAttributes } from 'react';

export type GridLayoutProps = HTMLAttributes<HTMLDivElement> & {
  cols?: number;
  rows?: string | number;
  children?: React.ReactNode;
};

