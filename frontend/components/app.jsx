import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import Welcome from './welcomepage/welcome';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import TaskFormContainer from './task_form/all_tasks_container';
import UserHomepageContainer from './user_homepage/user_homepage_container';
import ListFormContainer from './lists_form/list_form_container';
import ListTaskContainer from './task_form/list_tasks_container';

const App = () => (
  <div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <AuthRoute exact path='/login' component={SessionFormContainer} />
        <AuthRoute exact path='/signup' component={SessionFormContainer} />
      </Switch>
      <ProtectedRoute path='/' component={UserHomepageContainer} />
      <ProtectedRoute exact path='/tasks' component={TaskFormContainer} />
      <ProtectedRoute path='/' component={ListFormContainer} />
      <ProtectedRoute exact path='/lists/:listId/tasks' component={ListTaskContainer} />
  </div>
);

export default App;
