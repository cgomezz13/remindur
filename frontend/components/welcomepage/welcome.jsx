import React from "react";
import { Link } from "react-router-dom";

const welcome = () => {
  const login = "Log In";
  const signup = "Sign Up";

  return (
    <section className="greeting">
      <section className="main-header">
        <nav className="header-nav">
          <h1 className="navbar-logo">Remindur</h1>
          <ul className="navbar-links">
            <li>
              <Link className="session_link" to="/login">
                {login}
              </Link>
            </li>
            <li>
              <Link className="session_link" to="/signup">
                {signup}
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="greeting-main">
        <div className="site-info">The smart to-do app for busy people.</div>
      </section>
    </section>
  );
};

export default welcome;
