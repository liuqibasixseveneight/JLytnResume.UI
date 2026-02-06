import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { App } from './App.tsx';
import { SmoothLayout } from './components/hocs';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothLayout>
        <App />
      </SmoothLayout>
    </BrowserRouter>
  </StrictMode>
);
