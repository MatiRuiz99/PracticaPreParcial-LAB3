import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import "./login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const navigation = useNavigate();

  const emailChangedHandler = (event) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setEmail(event.target.value);
  };

  const passwordChangedHandler = (event) => {
    passRef.current.style.borderColor = "";
    passRef.current.style.outline = "";
    setPass(event.target.value);
  };

  const signInClicked = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      return;
    }

    if (pass.length === 0) {
      passRef.current.focus();
      passRef.current.style.borderColor = "red";
      passRef.current.style.outline = "none";
      return;
    }

    alert(`Su email ${email} y su password ${pass} han sido registrados`);

    onLogin();
    navigation("/home");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h4>¡Bienvenidos a Book Champions!</h4>
        <div className="input-container">
          <input
            className="input-control"
            onChange={emailChangedHandler}
            placeholder="Email"
            type="email"
            value={email}
            ref={emailRef}
          />
        </div>
        <div className="input-container">
          <input
            className="input-control"
            onChange={passwordChangedHandler}
            placeholder="Password"
            type="password"
            value={pass}
            ref={passRef}
          />
        </div>
        <button className="signin-button" onClick={signInClicked} type="button">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
