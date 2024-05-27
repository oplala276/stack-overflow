import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { signup, login, forgot } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [forgotPassword, setForgotPassword] = useState(false)

  const handlePassword = () => {
    setForgotPassword(!forgotPassword)
  }

  const sendMail = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter email for password recovery.");
    } else {
      dispatch(forgot({ email}, navigate));
      alert(`Password Sent on ${email}`);
    }
  };
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div class="auth-container-2">
        {!forgotPassword && !isSignup && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        {forgotPassword && (
          <form onSubmit={sendMail}>
            <p>
              Forgot your account’s password? Enter your
              <br />
              email address and we’ll send you a recovery
              <br />
              link.
            </p>
            <label htmlFor="email">
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                id="email"
                style={{ borderRadius: "6px" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <button type="submit" className="forgot-btn">
              Send recovery mail
            </button>
          </form>
        )}

        {!forgotPassword && (
          <>
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <label htmlFor="name">
                  <h4>Display Name</h4>
                  <input
                    type="text"
                    name="name"
                    id="name  "
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              )}

              <label htmlFor="email">
                <h4>Email</h4>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </label>
              <label htmlFor="password">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Password</h4>
                  {!isSignup && (
                    // style={{ color: "#007ac6", fontSize: "13px" }
                    <button type="button" className="handle-switch-btn" onClick={handlePassword}>
                      Forgot Password?
                    </button>
                  )}
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
                {isSignup && (
                  <p style={{ color: "#666767", fontSize: "13px" }}>
                    Password must contain atleast eight
                    <br />
                    characters, including at least 1 letter and 1<br />
                    number.{" "}
                  </p>
                )}
              </label>
              {isSignup && (
                <label htmlFor="check">
                  <input type="checkbox" id="check" />
                  <p style={{ fontSize: "13px" }}>
                    Opt-in to receive occasional <br /> product updates, user
                    research invitations,
                    <br /> company announcements, and digests.
                  </p>
                </label>
              )}
              <button type="submit" className="auth-btn">
                {isSignup ? "Sign up " : "Log in"}
              </button>
              {isSignup && (
                <p style={{ color: "#666767", fontSize: "13px" }}>
                  {" "}
                  By clicking "Sign up", you agree to our
                  <span style={{ color: "#007ac6" }}>
                    {" "}
                    terms of <br />
                    service
                  </span>
                  ,<span style={{ color: "#007ac6" }}> privacy policy </span>and
                  <span style={{ color: "#007ac6" }}> cookie policy</span>{" "}
                </p>
              )}
            </form>
            <p>
              {isSignup ? "Already have an account" : "Don't have an accont"}
              <button
                type="button"
                className="handle-switch-btn"
                onClick={handleSwitch}
              >
                {isSignup ? "Log in" : "Sign up"}
              </button>
            </p>
          </>
        )}
      </div>
    </section>
  );
};
export default Auth;
