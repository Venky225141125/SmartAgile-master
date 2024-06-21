import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/smartagilelogo.png"; // Replace with your actual logo path

const PasswordResetForm = () => {
  const navigate = useNavigate(); // Initialize navigate from useNavigate hook
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    setMessage("");
    setError("");

    // Validate OTP and passwords
    if (!otp) {
      setError("OTP is required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    const storedOTP = JSON.parse(localStorage.getItem("otp"));
    const email = JSON.parse(localStorage.getItem("reset_email"));
    const formData = new FormData();
    formData.append("email", email);
    formData.append("otp", otp);
    formData.append("password", password);
    formData.append("sotp", storedOTP);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/resetpassword/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("otp");
        localStorage.removeItem("reset_email");
        setMessage(response.data.message); // Set success message
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after success
        }, 2000); // Redirect after 2 seconds
      } else {
        setError(
          response.data.error || "Failed to reset password. Please try again."
        ); // Set error message
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError(
        error.response?.data?.error ||
          "Failed to reset password. Please try again."
      ); // Generic error message
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <img src={logo} alt="Logo" className="mx-auto mb-4 w-24 h-24" />
        <h1 className="text-2xl mb-4 text-center font-bold">Reset Password</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button
            onClick={handleResetPassword}
            className="w-full m-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Reset Password
          </button>
        </div>
        {message && (
          <div className="mt-4 text-center text-green-600">{message}</div>
        )}
        {error && <div className="mt-4 text-center text-red-600">{error}</div>}
      </div>
    </div>
  );
};

export default PasswordResetForm;
