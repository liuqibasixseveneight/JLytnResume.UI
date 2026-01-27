import { Contact, Footer, Home, Intro, Projects } from './components/pages';

const AppComponent = () => {
  return (
    <>
      <Home />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export const App = AppComponent;
