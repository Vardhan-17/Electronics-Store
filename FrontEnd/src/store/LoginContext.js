import React from "react";

const LoginContext = React.createContext({
  email: "",
  loginHandler: () => {},
  logoutHandler: () => {},
  showLogin: false,
  showSignin: false,
  showLoginHandler: () => {},
  showSigninHandler: () => {},
  closeLoginHandler: () => {},
  closeSigninHandler: () => {},
});

export default LoginContext;
