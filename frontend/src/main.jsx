import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // <-- Import BrowserRouter
import './index.css';
import App from './App.jsx';
import { Toaster } from './components/ui/sonner';
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap App in BrowserRouter */}
    <Provider  store={store}>
    <App />
    </Provider>
      
      <Toaster/>
    </BrowserRouter>
  </StrictMode>
);
