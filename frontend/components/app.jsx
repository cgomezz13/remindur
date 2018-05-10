import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import Homepage from './homepage/homepage';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={SessionFormContainer} />
        <Route exact path='/signup' component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
