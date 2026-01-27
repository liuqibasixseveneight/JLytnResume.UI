import { HeaderBioText, HeaderWrapper } from './Header.styles';
import type { HeaderProps } from './types';

export const Header = ({}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderBioText data-speed='1.03' data-lag='0.007' data-delay='0.1'>
        A{' '}
        <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
          Frontend Developer
        </span>{' '}
        building experiences and platforms for the web.
      </HeaderBioText>
    </HeaderWrapper>
  );
};
