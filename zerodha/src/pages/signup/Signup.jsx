import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // IMPORTANT: Trim values before sending to match backend behavior
      const trimmedData = {
        email: inputValue.email.trim(),
        password: inputValue.password.trim(),
        username: inputValue.username.trim(),
      };

      console.log("Sending signup data:", { 
        email: trimmedData.email, 
        username: trimmedData.username,
        password: "***" 
      });

      const { data } = await axios.post(
        "https://zerodhabackend-w2jv.onrender.com/auth/signup",
        trimmedData, // Send trimmed data instead of inputValue
        { withCredentials: true }
      );

      console.log("Signup Response:", data);

      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      console.error("Signup Axios Error:", error);
      handleError(error.response?.data?.message || "Something went wrong");
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Create an Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={username}
                  placeholder="Choose a username"
                  onChange={handleOnChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
