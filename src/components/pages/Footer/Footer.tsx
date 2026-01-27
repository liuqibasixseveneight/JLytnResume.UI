import { FooterWrapper } from './Footer.styles';
import type { FooterProps } from './types';

export const Footer = ({}: FooterProps) => {
  return (
    <FooterWrapper>
      <footer>
        <p data-speed='1.0' data-lag='0.01' data-delay='0.12'>
          © {new Date().getFullYear()} Joshua Layton. All rights reserved.
        </p>
      </footer>
    </FooterWrapper>
  );
};
