import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// SchedulaCore styles, resolved through the package "exports" map.
import 'schedula-core/css';
import 'schedula-core/css/popup';
import 'schedula-core/css/themes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
