import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/styles/index.scss';
import { TestServiceContext, testService } from './services/TestService.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestServiceContext.Provider value={testService}>
      <App />
    </TestServiceContext.Provider>
  </React.StrictMode>
);
