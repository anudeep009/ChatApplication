import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { DarkModeProvider } from './contexts/DarkModeContext'
import { AuthForm } from '../exports';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/authentication" element={<AuthForm />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  </React.StrictMode>,
);
