import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './App.tsx';
import { SmoothLayout } from './components/hocs';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothLayout>
      <App />
    </SmoothLayout>
  </StrictMode>
);
