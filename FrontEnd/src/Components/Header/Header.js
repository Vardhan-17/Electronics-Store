import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import LoginContext from "../../store/LoginContext";
import HeaderButton from "./HeaderButton";

function Header() {
  const log = useContext(LoginContext);

  let tags = (
    <React.Fragment>
      <li className="nav-item">
        <button className="btn btn-success mx-2" onClick={log.showLoginHandler}>
          Login
        </button>
      </li>
      <li className="nav-item">
        <button className="btn btn-success" onClick={log.showSigninHandler}>
          Signin
        </button>
      </li>
    </React.Fragment>
  );

  if (log.email) {
    tags = (
      <li className="nav-item">
        <NavLink className="nav-link" to="/" onClick={log.logoutHandler}>
          Logout
        </NavLink>
      </li>
    );
  }

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"></NavLink>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {tags}
          </ul>
          {log.email && <HeaderButton />}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
