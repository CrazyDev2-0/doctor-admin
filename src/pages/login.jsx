import React, { useRef } from "react";
import logo from "../assets/logo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//  Completely built on custom CSS
// To modify check _loginPage.scss

const BASEURL = 'https://d2a6-103-171-246-169.in.ngrok.io';
const LoginPage = () => {
  const navigate = useNavigate();
  // Login form state
  const formRef = useRef({
    email: "",
    password: "",
  });


  // Handle login form submit
  async function handleSubmit() {
    const data = await axios({
      method: 'post',
      url: `${BASEURL}/auth/login-doctor`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        "email": formRef.current.email
      })
    });
    // console.log(data.data.code);
    if(data.data.code === 200)  {   
      localStorage.setItem('token', data.data.payload.token);
      localStorage.setItem('profile', JSON.stringify(data.data.payload));
      window.location.href="/";
      // navigate("/", {replace: true});
    }else {
      console.log("Incorrect Login Credentials");
    }
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
