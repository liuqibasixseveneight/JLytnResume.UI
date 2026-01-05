import { Header } from '../../ui';
import { HomeWrapper } from './Home.styles';

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />

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
          gap: '0.2em',
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
