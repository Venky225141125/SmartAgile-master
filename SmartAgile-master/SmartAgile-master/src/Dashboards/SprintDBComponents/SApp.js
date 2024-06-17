// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SprintDashboard from './components/SprintDBComponent/EmployeeDashboard';
import SHome from './components/SprintDBComponent/EHome';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<SprintDashboard />}>
        <Route path="ehome" element={<SHome />} />
      </Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
