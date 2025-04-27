
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5002/auth/userVerification", { 
        withCredentials: true 
      })
      .then(res => {
        if (res.data.status) {
          setUser(res.data.user);
          // Optionally store user data for client-side use
          localStorage.setItem("userId", res.data.user.id);
          localStorage.setItem("username", res.data.user.username);
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      })
      .catch(() => window.location.href = "http://localhost:5173/login")
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Checking session…</p>;
  
  return (
    <>
      <TopBar username={user.username} />
      <Dashboard username={user.username} />
    </>
  );
}