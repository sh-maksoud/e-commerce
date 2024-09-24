

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import useThemeStore from "../../store/useThemeStore"; 
import "./SignUp.css"; 

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !firstName || !lastName) {
        throw new Error("Please enter all required fields.");
      }
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User account created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={isDarkMode ? "signup-container dark-mode" : "signup-container light-mode"}>
      <h2>Create your account</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>First Name*</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name*</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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

      <p className="already-member">
        Already have an account? <a href="/login">Log in</a>
      </p>

      <div className="separator">
        <span>OR</span>
      </div>

      <div className="oauth-buttons">
        <button className="btn-google">Continue with Google</button>
        <button className="btn-microsoft">Continue with Microsoft Account</button>
        <button className="btn-apple">Continue with Apple</button>
      </div>
    </div>
  );
};

export default SignUp;

