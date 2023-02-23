import axios from "axios";
import React, { useState } from "react";
import "./style.css";

const RegisterationForm = () => {
  const initialData = {
    name: "",
    email: "",
    contact: "",
    password: ""
    
  }
  const [registrationData, setRegistrationData] = useState(initialData);
  const handleChange = (e) => {
    const {name, value} = e.target

    switch (name) {
      case "firstName":
        setRegistrationData((prevState)=> ({...prevState, name:value}));
        break;
      case "email":
        setRegistrationData((prevState)=> ({...prevState, email:value}));
        break;
      case "contact":
        setRegistrationData((prevState)=> ({...prevState, contact:value}));
        break;
      case "password":
        setRegistrationData((prevState)=> ({...prevState, password:value}));
        break;
    }
    
  };

  const handleSubbmit = (e)=> {
    console.log("subbmitted form")
    axios.post("http://localhost:3200/student", registrationData).then((res)=> {
       console.log(res)
    }).catch((error)=> {
      console.log(error)
    });

    e.preventDefault();
  }


  return (
    <>
      <div className="main-wrapper">
        <h1>Creative SignUp Form</h1>
        <div className="wrapper">
          <div className="form-box">
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Username"
                id="firstName"
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                name="contact"
                placeholder="Enter your contact number"
                id="contact"
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                onChange={(e) => handleChange(e)}
              />

              <div className="terms-condition">
                <label className="check-box">
                  <input type="checkbox" className="checkbox" required />
                  <span>I Agree To The Terms & Conditions </span>
                </label>
              </div>
              <input type="submit" value="REGISTER" onClick={handleSubbmit}/>
            </form>
            <p>
              Don't have an Account?<a href="/"> Login Now!</a>
            </p>
          </div>
        </div>
        <div className="copyright-section">
          <p>© 2023 Signup Form. All rights reserved | Design by Narender</p>
        </div>
        <div className="wrapper-bubble">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RegisterationForm;
