import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/smartagilelogo.png';

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials (for demonstration purposes only)
    const adminCredentials = { username: 'admin', password: 'admin123' };
    const employeeCredentials = { username: 'employee', password: 'emp123' };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      navigate('/admin/sprint-dashboard');
    } else if (username === employeeCredentials.username && password === employeeCredentials.password) {
      navigate('/employee/dashboard');
    } else {
      alert('Invalid credentials or role');
    }
  };

  return (
    <div className="employeelogin min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl mb-4 text-center font-bold">Employee Login</h1>
        <img src={logo} alt="Logo" className="mx-auto mb-4 w-24 h-24" /> {/* Replace 'path/to/logo.png' with the actual path to your logo */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button onClick={handleLogin} className="w-full m-2 p-2 bg-green-500 text-white rounded hover:bg-green-600">
            Login
          </button>
        </div>
        <div className="text-center mt-4">
          <a href="/forgotpassword" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
