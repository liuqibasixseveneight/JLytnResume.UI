import { ContactInnerWrapper, ContactWrapper } from './Contact.styles';
import type { ContactProps } from './types';

export const Contact = ({}: ContactProps) => {
  return (
    <ContactWrapper>
      <ContactInnerWrapper>
        <h1
          style={{
            fontSize: '12rem',
            padding: '4rem',
            mixBlendMode: 'difference',
          }}
          data-speed='1.05'
          data-lag='0.007'
          data-delay='0.105'
        >
          Get in Touch
        </h1>
      </ContactInnerWrapper>
    </ContactWrapper>
  );
};
