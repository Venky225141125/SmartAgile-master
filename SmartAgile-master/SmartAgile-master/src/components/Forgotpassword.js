import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    setMessage("");
    setError("");

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/forgetpassword/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Success:", response.data);
      localStorage.setItem("otp", JSON.stringify(response.data.otp));
      localStorage.setItem("reset_email", JSON.stringify(email));
      navigate("/forget/resetpassword");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        setError(
          error.response.data.error || "Failed to send reset instructions."
        );
      } else if (error.request) {
        console.error("Error request:", error.request);
        setError("No response received from server.");
      } else {
        console.error("Error message:", error.message);
        setError("Failed to send reset instructions. Please try again.");
      }
    }
  };

  return (
    <div className="forgotpassword min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl mb-4 text-center font-bold">Forgot Password</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button
            onClick={handleForgotPassword}
            className="w-full m-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Send Reset Instructions
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

export default ForgotPassword;
