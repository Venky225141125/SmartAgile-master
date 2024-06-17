import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Correctly import from react-router-dom
import Login from "./components/Login.js";
import AdminLogin from "./components/AdminLogin.js";
import Signup from "./components/Signup.js";
import Header from "./components/Header";
import Content from "./components/Content";
//import Footer from "./components/Footer";
import About from "./components/About.js";
import DataCheck from "./components/data.js";
import ForgotPassword from "./components/Forgotpassword";
import UserProfile from "./components/UserProfile";
import Employee from "./components/Employee";
//import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeDashboard from './Dashboards/EmployeeDBComponent/EmployeeDashboard';
import GroupDashboard from './Dashboards/GroupDBComponent/GroupDashboard';
import SprintDashboard from './Dashboards/SprintDBComponents/SprintDashboard';
import LandingPage from "./components/LandingPage.js";
import LoginPage from "./components/LoginPage.js";
import EmployeeProfiles from "./components/EmployeeProfiles.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/loging" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
  
      <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
      <Route path="/group/dashboard" element={<GroupDashboard />} />
      <Route path="/admin/sprint-dashboard" element={<SprintDashboard />} />
      <Route path="/admin/employee-profiles" element={<EmployeeProfiles />} />
      
        {/* Add other routes as needed */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
