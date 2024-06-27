import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Correctly import from react-router-dom
import Login from "./components/Login.js";
import AdminLogin from "./components/AdminLogin.js";
import Signup from "./components/Signup.js";
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About.js";
import DataCheck from "./components/data.js";
import ForgotPassword from "./components/Forgotpassword";
import UserProfile from "./components/UserProfile";
import EmployeeDashboard from "./components/EmployeeDBComponents/EmployeeDashboard";
import GroupDashboard from "./components/GroupDBComponents/GroupDashboard";
import SprintDashboard from "./components/SprintDBComponents/SprintDashboard";
import AdminDashboard from "./components/AdminDBComponents/AdminDashboard";
import LandingPage from "./components/LandingPage.js";
import LoginPage from "./components/LoginPage.js";
import PasswordReset from "./components/PasswordReset.js";
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

        <Route path="/forget/resetpassword" element={<PasswordReset />} />
        <Route path="/forget" element={<ForgotPassword />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/group/dashboard" element={<GroupDashboard />} />
        <Route path="/admin/sprint-dashboard" element={<SprintDashboard />} />
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employee-profiles" element={<EmployeeProfiles />} />

        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
