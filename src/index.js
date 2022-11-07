import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContextProvider from './context/main-context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
);


