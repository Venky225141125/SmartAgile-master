import React, { useState } from "react";
import axios from "axios";

import logo from "../assets/smartagilelogo.png"; // Adjust path as needed
import {Link, useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is not valid";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
      // } else if (form.password.length < 8 || form.password.length > 12) {
      //   newErrors.password = "Password must be between 8 and 12 characters";
    } else if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*])/.test(form.password)
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@#$%&*)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform login logic using Axios
      axios
        .post("http://127.0.0.1:8000/api/login/", form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setMessage("Login successful!");
          console.log("Form submitted", response.data);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/admin/sprint-dashboard");
        })
        .catch((error) => {
          setMessage("Invalid email or password.");
          console.error("There was an error!", error);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl mb-4 text-center font-bold">Employee Login</h1>
        <img src={logo} alt="Logo" className="mx-auto mb-4 w-24 h-24" /> {/* Replace 'path/to/logo.png' with the actual path to your logo */}
        <form onSubmit={handleSubmit}>
          <div className="my-6">
            <input
              type="email"
              name="email"
              placeholder="Username"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              style={{ width: '250px' }}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              style={{ width: '250px' }}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          {message && <div className="text-center text-danger">{message}</div>}
          <div className="flex justify-center items-center">
            <button type="submit" className="w-48 bg-green-500 text-white py-2 rounded">
              Login
            </button>
          </div>
          <p className="text-end mt-2">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
