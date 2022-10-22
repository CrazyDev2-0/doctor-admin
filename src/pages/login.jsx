import React, { useRef } from "react";
import logo from "../assets/logo.jpg";

//  Completely built on custom CSS
// To modify check _loginPage.scss

const LoginPage = () => {
  // Login form state
  const formRef = useRef({
    email: "",
    password: "",
  });


  // Handle login form submit
  function handleSubmit() {

  }


  return (
    <>
      {/* /Main content */}

      <div className="loginContainer">
        <div className="loginMainContainer" spacing={0}>
          <div className="right">
            <div className="basic_details">
            <img src={logo} alt="" />
            </div>

            <h3>Login yourself ✌</h3>
            <div className="form-input">
              <p>E-mail ID</p>
              <input
                type="email"
                placeholder="Enter registered email id"
                onChange={(e) => {
                  formRef.current["email"] = e.target.value;
                }}
              />
            </div>
            <div className="form-input">
              <p>Password</p>
              <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => {
                  formRef.current["password"] = e.target.value;
                }}
              />
            </div>
            <button className="loginBtn" onClick={() => handleSubmit()}>
              Login
            </button>

          </div>
          <div className="left">
            <div className="glasspanel">
                <img src={logo} alt="" />
              <p>Vital Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
