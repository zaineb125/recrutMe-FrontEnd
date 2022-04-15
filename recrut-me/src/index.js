import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);
const app = (
  <StrictMode>
    
      <App />
  
  </StrictMode>
);

root.render(app);

