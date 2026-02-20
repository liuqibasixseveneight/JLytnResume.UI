import { Route, Routes } from 'react-router-dom';

import { Home, Project, Projects } from './components/pages';

export const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Projects />} path='/projects' />
      <Route element={<Project />} path='/project/:name' />
    </Routes>
  );
};
