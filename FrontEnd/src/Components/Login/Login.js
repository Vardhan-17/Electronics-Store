import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

import useInput from "../../hooks/useInput";
import LoginContext from "../../store/LoginContext";
import Input from "../UI/Input";
import Alert from "../UI/Alert";
import Modal from "../UI/Modal";

function emailValidationHandler(value) {
  return value.includes("@") && value.includes(".");
}
function passwordValidationHandler(value) {
  return value.trim().length >= 4;
}

function Login(props) {
  const log = useContext(LoginContext);
  const [alert, setAlert] = useState();

  const {
    input: email,
    valid: emailValid,
    touched: emailTouched,
    inputHandler: emailHandler,
    inputBlurHandler: emailBlur,
  } = useInput(emailValidationHandler);

  const {
    input: password,
    valid: passwordValid,
    touched: passwordTouched,
    inputHandler: passwordHandler,
    inputBlurHandler: passwordBlur,
  } = useInput(passwordValidationHandler);

  const formIsValid = emailValid && passwordValid;

  async function formHandler(event) {
    event.preventDefault();
    emailBlur();
    passwordBlur();
    if (!formIsValid) return;
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      log.loginHandler(email);
    } catch (err) {
      setAlert(err.message);
    }
  }

  if (log.email) return <Redirect to="/" />;

  return (
    <Modal onClose={log.closeLoginHandler}>
      {alert && <Alert type="warning" msg={alert}></Alert>}
      <h3 className="text-center">Login</h3>
      <form onSubmit={formHandler} autoComplete="off" noValidate>
        <Input
          id="email"
          value={email}
          label="Email"
          type="email"
          valid={emailValid}
          touched={emailTouched}
          onChange={emailHandler}
          onBlur={emailBlur}
        ></Input>

        <Input
          id="password"
          value={password}
          label="Password"
          type="password"
          valid={passwordValid}
          touched={passwordTouched}
          onChange={passwordHandler}
          onBlur={passwordBlur}
        ></Input>
        <div className="container w-75 d-grid gap-2 col-6 mx-auto">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={!formIsValid ? true : false}
          >
            <strong>Login</strong>
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Login;
