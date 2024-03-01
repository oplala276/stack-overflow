import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "../auth/AboutAuth";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);

  const handleSwitch = () => {
    setisSignup(!isSignup);
  };

  const style = {
    color: "#666767",
    fontSize: "13px",
  };

  return (
    <section className="auth-section">
      {!isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {isSignup && (
          <img src={icon} alt="stack-overflow" className="login-logo" />
        )}
        {!isSignup && (
          <div>
            <h1>Create your account</h1>
            <p style={style}>
              By clicking “Sign up”, you agree to our{" "}
              <span style={{ color: "#007ac6" }}>terms of service</span> and{" "}
              <br />
              acknowledge you have read our{" "}
              <span style={{ color: "#007ac6" }}>privacy policy.</span>
            </p>
          </div>
        )}
        <form>
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {isSignup && (
                <h4
                  style={{
                    color: "#007ac6",
                    fontWeight: "lighter",
                    fontSize: "14px",
                  }}
                >
                  Forgot password?
                </h4>
              )}
            </div>
            <input type="password" name="password" id="password" />
          </label>
          {!isSignup && (
            <p style={style}>
              Must contain 8+ characters, including at least 1 letter and 1{" "}
              <br />
              number.
            </p>
          )}
          <button type="submit" className="auth-btn">
            {!isSignup ? "Sign up" : "Log in"}
          </button>
          <p>
            {isSignup ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              className="handle-switch-btn"
              onClick={handleSwitch}
            >
              {isSignup ? "Sign up" : "Log in"}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Auth;
