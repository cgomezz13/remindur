import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import Homepage from './homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <AuthRoute exact path='/login' component={SessionFormContainer} />
        <AuthRoute exact path='/signup' component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
