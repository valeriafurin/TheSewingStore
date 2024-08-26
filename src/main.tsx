import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('app');
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(container!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
