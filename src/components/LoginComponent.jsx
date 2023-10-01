import React, { useState } from "react";
import { LoginAPI, GoogleSigninAPI } from "../api/AuthAPI";
import Logo from '../assets/logo.png';
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
import '../Sass/LoginComponent.scss';
import { toast } from "react-toastify";

export default function LoginComponent(){
  let navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async() => {
        try{
            let res = await LoginAPI( credentials.email, credentials.password);
            toast.success("signed in");
            localStorage.setItem("userEmail", res.user.email);
            navigate("/home");
        }
        catch(err){
          console.log(err);
          toast.error("check credentials");
        }
        
    };

    const googleSignIn = () => {
      let response = GoogleSigninAPI();
      console.log(response);
    };

    return (
        <div className="login-wrapper">
      <img src={Logo} className="logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Join hands with tech wizards just like you</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
    <div className="google-btn-container">
    <GoogleButton
    className="google-btn"
  onClick={googleSignIn}
/>
   
     
        <p className="go-to-signup">
          First time around here?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Let's GO!!
          </span>
        </p>
      </div>
    </div>
  );
}