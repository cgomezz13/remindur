import React from "react";
import { Provider } from "react-redux";
import SessionFormContainer from "./session_form/session_form_container";
import Welcome from "./welcomepage/welcome";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import TaskFormContainer from "./task_form/all_tasks_container";
import UserHomepageContainer from "./user_homepage/user_homepage_container";
import ListFormContainer from "./lists_form/list_form_container";
// import ListTaskContainer from "./task_form/list_tasks_container";
import EditTaskContainer from "./edit_task/edit_task_container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
    </Switch>
    <ProtectedRoute path="/" component={UserHomepageContainer} />
    <div className="list-and-task">
      <ProtectedRoute path="/" component={ListFormContainer} />
      <div className="task-show">
        <ProtectedRoute path="/tasks" component={TaskFormContainer} />
        {/* <ProtectedRoute
          path="/lists/:listId/tasks"
          component={ListTaskContainer}
        /> */}
        <ProtectedRoute
          path="/tasks/:taskId/edit"
          component={EditTaskContainer}
        />
        <ProtectedRoute
          path="/lists/:listId/tasks/:taskId/edit"
          component={EditTaskContainer}
        />
      </div>
    </div>
  </div>
);

export default App;
