import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { Toaster } from 'sonner';
import { BrandProvider } from './context/BrandContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <BrandProvider>
        <App />
        <Toaster position="top-right" richColors />
      </BrandProvider>
    </MotionConfig>
  </StrictMode>
);
