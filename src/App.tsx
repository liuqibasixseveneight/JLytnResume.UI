import { Route, Routes } from 'react-router-dom';

import { Home } from './components/pages';

const AppComponent = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
    </Routes>
  );
};

export const App = AppComponent;
