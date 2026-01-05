import { FluidGradient, Header } from '../../ui';
import { HomeWrapper } from './Home.styles';

export const Home = () => {
  return (
    <HomeWrapper>
      <FluidGradient />
      <Header />

      <h1
        style={{
          color: '#000',
          fontWeight: '800',
          position: 'absolute',
          top: 'calc(50% - 4rem)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '120rem',
          fontFamily: 'var(--font-great-vibes)',
          userSelect: 'none',
          zIndex: '1',
        }}
      >{`X`}</h1>

      <h1
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '20rem',
          marginBottom: '4rem',
          letterSpacing: '-0.05em',
          mixBlendMode: 'difference',
          userSelect: 'none',
          gap: '0.2em',
          zIndex: '2',
        }}
      >
        <span style={{ fontWeight: 600 }}>Joshua</span>
        <span
          style={{
            fontStyle: 'italic',
            fontWeight: 400,
          }}
        >
          Layton
        </span>
      </h1>
    </HomeWrapper>
  );
};
