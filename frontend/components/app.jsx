import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header>
        <h1>Remindur</h1>
    </header>

      <Switch>
        <Route exact path='/login' component={SessionFormContainer} />
        <Route exact path='/signup' component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
