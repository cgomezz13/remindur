import React from 'react';
import { Link } from 'react-router-dom';

const welcome = () => {

  const login = 'Log In';
  const signup = 'Sign Up';


  return (
    <section className='greeting'>

      <section className='main-header'>
        <nav className='header-nav'>
          <h1 id='navbar-logo'>
              Remindur
          </h1>
          <ul className='navbar-links'>
            <li><Link id='link' to='/login'>{login}</Link></li>
            <li><Link id='link' to='/signup'>{signup}</Link></li>
          </ul>
        </nav>
      </section>

      <section className='greeting-main'></section>

    </section>
    );

}

export default welcome;
