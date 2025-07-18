import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;
  setIsSubmitting(true);
  
  // Trim before sending
  const cleanedInput = {
    email: inputValue.email.trim(),
    password: inputValue.password.trim()
  };
  
  try {
    console.log("=== LOGIN DEBUG ===");
    console.log("Raw input values:", {
      email: inputValue.email,
      password: inputValue.password,
      emailLength: inputValue.email.length,
      passwordLength: inputValue.password.length
    });
    
    console.log("Cleaned input values:", {
      email: cleanedInput.email,
      password: cleanedInput.password,
      emailLength: cleanedInput.email.length,
      passwordLength: cleanedInput.password.length
    });
    
    console.log("Attempting login with email:", cleanedInput.email);
    
    const response = await axios.post(
      "https://zerodhabackend-w2jv.onrender.com/auth/login",
      cleanedInput,
      { withCredentials: true }
    );
    
    const { success, message, token, user } = response.data;
    if (success && user) {
      handleSuccess(message);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("username", user.username);
      setTimeout(() => {
        window.location.href = "https://dashboard-lemon-phi-34.vercel.app/";
      }, 1000);
    } else {
      handleError(message || "Login failed");
    }
  } catch (error) {
    console.error("=== LOGIN ERROR ===");
    console.error("Full error:", error);
    console.error("Response data:", error.response?.data);
    handleError(error.response?.data?.message || "Login failed");
  } finally {
    setIsSubmitting(false);
    setInputValue({ email: "", password: "" });
  }
};


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={inputValue.email}
                  className="form-control"
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={inputValue.password}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
