

import useThemeStore from "../../store/useThemeStore"; 
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth"; 
import { auth } from "../../firebase"; 
import { useAuth } from "../../hooks/useAuth"; 
import "./Login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isDarkMode = useThemeStore((state) => state.isDarkMode); 
  const { currentUser, signOut } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password) {
      setError("Password is required."); 
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      setError(""); 
    } catch (err) {
      if (err.code === "auth/missing-password") {
        setError("Password is required.");
      } else {
        setError(err.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleMicrosoftLogin = async () => {
    const provider = new OAuthProvider("microsoft.com");
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Microsoft successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAppleLogin = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Apple successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      alert("Logged out successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={isDarkMode ? "auth-form dark-mode" : "auth-form"}>
      <h2>{currentUser ? "Welcome!" : "Login"}</h2>

      {currentUser ? (
      
        <div>
          <p>You're logged in as {currentUser.email}</p>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email address*</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn-primary" type="submit">
            Continue
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      )}

      <p className="already-member">
        {currentUser ? (
          ""
        ) : (
          <>
            Don't have an account? <a href="/signup">Sign up</a>
          </>
        )}
      </p>

      {!currentUser && (
        <>
          <div className="separator">
            <span>OR</span>
          </div>
          <div className="oauth-buttons">
            <button className="btn-google" onClick={handleGoogleLogin}>
              Continue with Google
            </button>
            <button className="btn-microsoft" onClick={handleMicrosoftLogin}>
              Continue with Microsoft Account
            </button>
            <button className="btn-apple" onClick={handleAppleLogin}>
              Continue with Apple
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;




