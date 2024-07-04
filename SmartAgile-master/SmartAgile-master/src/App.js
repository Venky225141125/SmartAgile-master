import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Correctly import from react-router-dom
import AdminLogin from "./components/AdminLogin.js";
import EmployeeLogin from "./components/EmployeeLogin.js";
import About from "./components/About.js";
import ForgotPassword from "./components/Forgotpassword";
import EmployeeProfile from "./components/EmployeeProfile";
import EmployeeDashboard from "./components/EmployeeDBComponents/EmployeeDashboard";
import GroupDashboard from "./components/GroupDBComponents/GroupDashboard";
import SprintDashboard from "./components/SprintDBComponents/SprintDashboard";
import AdminDashboard from "./components/AdminDBComponents/AdminDashboard";
import LandingPage from "./components/LandingPage.js";
import LoginPage from "./components/LoginPage.js";
import PasswordReset from "./components/PasswordReset.js";
import EmployeeProfiles from "./components/EmployeeDBComponents/EmployeeProfiles.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/employeelogin" element={<EmployeeLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/group/dashboard" element={<GroupDashboard />} />
        <Route path="/admin/sprint-dashboard" element={<SprintDashboard />} />
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-profiles" element={<EmployeeProfiles />} />
        

        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
