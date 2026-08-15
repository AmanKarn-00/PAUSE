import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100dvh',
          background: '#fcfbf9',
          color: '#1e293b',
          fontFamily: "'Noto Sans Devanagari', 'Inter', sans-serif",
          fontSize: '1.1rem',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#1e4c5b',
              marginBottom: '1rem',
            }}>
              PAUSE
            </div>
            <div style={{ opacity: 0.6 }}>लोड हुँदैछ...</div>
          </div>
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
