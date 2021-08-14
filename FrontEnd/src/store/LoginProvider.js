import { useState } from "react";
import LoginContext from "./LoginContext";

function LoginProvider(props) {
  const [login, setLogin] = useState();
  const [showSignin, setShowSignin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function loginHandler(emailId) {
    setLogin(emailId);
  }

  function logoutHandler() {
    setLogin(null);
  }

  const showSigninHandler = () => {
    setShowSignin(true);
    setShowLogin(false);
  };

  const showLoginHandler = () => {
    setShowSignin(false);
    setShowLogin(true);
  };

  const closeLoginHandler = () => {
    setShowLogin(false);
  };

  const closeSigninHandler = () => {
    setShowSignin(false);
  };

  const log = {
    email: login,
    loginHandler,
    logoutHandler,
    showSignin,
    showLogin,
    showLoginHandler,
    showSigninHandler,
    closeLoginHandler,
    closeSigninHandler,
  };

  return (
    <LoginContext.Provider value={log}>{props.children}</LoginContext.Provider>
  );
}

export default LoginProvider;
