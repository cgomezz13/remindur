import React from 'react';
import { Link } from 'react-router-dom';

const homepage = () => {

    const login = 'Log In';
    const signup = 'Sign Up';


    return (
      <section className='greeting-navbar'>
        <div id='title'>
            <section>Remindur</section>
        </div>
        <div className='navbar-links'>
          <li><Link to='/login'>{login}</Link></li>
          <li><Link to='/signup'>{signup}</Link></li>
        </div>
      </section>
    );

}

export default homepage;
