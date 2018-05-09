import React from 'react';
import { Provider } from 'react-redux';
import SignUpContainer from './session_form/signup_form_container';
import LogInContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
        <h1>hello im at root</h1>
    </header>
      <SignUpContainer />
      <LogInContainer />
  </div>
);

export default App;
