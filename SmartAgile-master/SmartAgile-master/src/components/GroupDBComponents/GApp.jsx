// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupDashboard from './components/GroupDBComponent/GroupDashboard';
import GHome from './components/GroupDBComponent/GHome';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<GroupDashboard />}>
        <Route path="ghome" element={<GHome />} />
      </Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
