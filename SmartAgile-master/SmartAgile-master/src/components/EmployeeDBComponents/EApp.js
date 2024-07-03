// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDBComponent/EmployeeDashboard';
import EHome from './components/EmployeeDBComponent/EHome';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<EmployeeDashboard />}>
        <Route path="ehome" element={<EHome />} />
      </Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
