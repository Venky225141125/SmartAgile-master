// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDBComponent/AdminDashboard';
import AHome from './components/AdminDBComponent/AHome';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<AdminDashboard />}>
        <Route path="ahome" element={<AHome />} />
      </Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
