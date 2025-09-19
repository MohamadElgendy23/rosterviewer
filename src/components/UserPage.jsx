import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserPage.css";

const userAPI = "http://localhost:3000/user";
function UserPage() {
  const [mode, setMode] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${userAPI}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        return;
      }
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (registerPassword !== registerConfirmPassword) {
      return;
    }

    try {
      const res = await fetch(`${userAPI}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
          favorites: [],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        return;
      }

      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterConfirmPassword("");
    } catch (err) {
      console.error("Register error:", err);
    }
  }

  return (
    <div className="User">
      <header className="header">
        <h2>Login/Register</h2>
        <div>
          {mode === "login" ? (
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="text"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button type="submit">Login</button>
              <p>
                Dont have an account?{" "}
                <button
                  className="signup-button"
                  onClick={() => setMode("signup")}
                >
                  Signup
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="register-form">
              <input
                type="text"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={registerConfirmPassword}
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}
              />
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <button
                  className="login-button"
                  onClick={() => setMode("login")}
                >
                  Login
                </button>
              </p>
            </form>
          )}
        </div>
      </header>
    </div>
  );
}

export default UserPage;
