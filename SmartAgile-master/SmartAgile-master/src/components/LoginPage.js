import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') {
      navigate('/adminlogin');
    } else {
      navigate('/loging');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">Login</h1>
      <div>
        <button onClick={() => handleLogin('employee')} className="m-2 p-2 bg-green-500 text-white rounded">Employee Login</button>
        <button onClick={() => handleLogin('admin')} className="m-2 p-2 bg-blue-500 text-white rounded">Admin Login</button>
      </div>
    </div>
  );
};

export default LoginPage;