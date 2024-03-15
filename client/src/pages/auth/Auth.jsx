import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    // setName("");
    // setEmail("");
    // setPassword("");
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
      <div className="auth-container-2">
        {!isSignup &&
        <img src={icon} alt="stack overflow" className="login-logo" />}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";
// import icon from "../../assets/icon.png";
// import AboutAuth from "./AboutAuth";
// import { signup, login } from "../../actions/auth";

// const Auth = () => {
//   const [isSignup, setisSignup] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSwitch = () => {
//     setisSignup(!isSignup);
//   };

//   const style = {
//     color: "#666767",
//     fontSize: "13px",
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Please enter Email and Password ");
//     }
//     if (isSignup) {
//       dispatch(signup({ email, password }, navigate));
//     } else {
//       dispatch(login({email, password}, navigate))
//     }
//   };

//   return (
//     <section className="auth-section">
//       {isSignup && <AboutAuth />}
//       <div className="auth-container-2">
//         {!isSignup && (
//           <img src={icon} alt="stack-overflow" className="login-logo" />
//         )}
//         {isSignup && (
//           <div>
//             <h1>Create your account</h1>
//             <p style={style}>
//               By clicking “Sign up”, you agree to our{" "}
//               <span style={{ color: "#007ac6" }}>terms of service</span> and{" "}
//               <br />
//               acknowledge you have read our{" "}
//               <span style={{ color: "#007ac6" }}>privacy policy.</span>
//             </p>
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">
//             <h4>Email</h4>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </label>
//           <label htmlFor="password">
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <h4>Password</h4>
//               {isSignup && (
//                 <h4
//                   style={{
//                     color: "#007ac6",
//                     fontWeight: "lighter",
//                     fontSize: "14px",
//                   }}
//                 >
//                   Forgot password?
//                 </h4>
//               )}
//             </div>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </label>
//           {isSignup && (
//             <p style={style}>
//               Must contain 8+ characters, including at least 1 letter and 1{" "}
//               <br />
//               number.
//             </p>
//           )}
//           <button type="submit" className="auth-btn">
//             {isSignup ? "Sign up" : "Log in"}
//           </button>
//             </form>
//           <p>
//             {isSignup ?"Already have an account?":"Don't have an account?"}
//             <button
//               type="button"
//               className="handle-switch-btn"
//               onClick={handleSwitch}
//             >
//               {isSignup ? "Log in" : "sign up"}
//             </button>
//           </p>
//       </div>
//     </section>
//   );
// };

// export default Auth;
