import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthForm from './Auth/AuthForm.jsx'
import { DarkModeProvider } from './contexts/DarkModeContext'
import UserProfile from './components/UserProfile.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path='/authentication' index element={<AuthForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  </React.StrictMode>,
);
