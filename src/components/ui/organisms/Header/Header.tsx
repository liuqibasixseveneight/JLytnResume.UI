import { HeaderBioText, HeaderWrapper } from './Header.styles';
import type { HeaderProps } from './types';

export const Header = ({}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderBioText>
        A{' '}
        <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
          Frontend Developer
        </span>{' '}
        building experiences and platforms for the web.
      </HeaderBioText>
    </HeaderWrapper>
  );
};
