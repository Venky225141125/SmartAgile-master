import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleRegister = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Hardcoded credentials (for demonstration purposes only)
    const adminCredentials = { username: 'admin', password: 'admin123' };
    const employeeCredentials = { username: 'employee', password: 'emp123' };

    if (role === 'admin' && username === adminCredentials.username && password === adminCredentials.password) {
      navigate('/admin/sprint-dashboard');
    } else if (role === 'employee' && username === employeeCredentials.username && password === employeeCredentials.password) {
      navigate('/employee/dashboard');
    } else {
      alert('Invalid credentials or role');
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      setProfilePhoto(file);
    } else {
      alert('Please upload a photo in PNG, JPG, or JPEG format.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl mb-4 text-center font-bold">Register</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="profilePhoto" className="block mb-2">Upload Photo</label>
          <input
            type="file"
            id="profilePhoto"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handlePhotoUpload}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="text-center">
          <button onClick={handleRegister} className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
