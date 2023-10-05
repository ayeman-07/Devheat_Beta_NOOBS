import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";

import "../Sass/LoginComponent.scss";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);

  const register = async () => {
    try {
      let res = await RegisterAPI(
        credentials.email,
        credentials.password,
        credentials.name,
        selectedSkills
      );

      toast.success("Account Created!");
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.error(err);
      toast.error("Cannot Create your Account");
    }
  };

  const handleSkillChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSkills(selectedOptions);
  };

  const skillsList = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    
  ];

  return (
    <div className="login-wrapper">
      <img src={Logo} className="logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Join us to meet tech wizards just like you</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your Name"
          />

          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or phone number"
          />

          <input
            onChange={(event) =>
              setCredentials({
                ...credentials,
                password: event.target.value,
              })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />

          {/* Input for selecting skills */}
          <label htmlFor="skills" className="skill-label">
            Select Skills:
          <span>(Press ctrl to choose multiple options)</span>

          </label>
          <select
            id="skills"
            multiple
            value={selectedSkills}
            onChange={handleSkillChange}
            className="skill-select"
          >

            {skillsList.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
              
            ))}

          </select>
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
      </div>

      <hr className="hr-text" data-content="or" />

      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on HackBuddy?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
