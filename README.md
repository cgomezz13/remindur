# Remindur

Remindur is a full-stack web application for saving tasks. Tasks can be assigned to a particular list/category or they can be saved independently. All tasks can have a status of incomplete or complete, an optional due date and a note. This is modeled after [RememberTheMilk](https://www.rememberthemilk.com/).

## Technologies

Remindur is built using Ruby on Rails backend, PostgreSQL as a database, and Ruby's Active Record for querying the database. The frontend uses a combination of React, Redux and Vanilla JavaScript to create the user interface. Additionally, HTML5 and CSS3 were used to design the site.

## Features

### Database

The database stores three tables, a users, tasks and lists table. Each table holds a `:foreign_key` as necessary to create the relations across the tables. For example, the `:tasks` table holds a `:list_id` and `:user_id` column. The task model then creates the relations as such

```javascript
// task.rb
class Task < ApplicationRecord

  validates :body, presence: true
  validates :status, inclusion: { in: [true, false] }

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :list,
    class_name: 'List',
    foreign_key: :list_id,
    primary_key: :id,
    optional: true

end
```

### Authentication

The user table stores a `:password_digest`, which is the encrypted version of the user's password; the password is encrypted using the BCrypt gem. When a user logs in, it will check the inputed credentials against the information stored in the database. If the login is successful, the session token will be set to match the user's `:session_token`. Having matching session and user `:session_token` means that a user is logged in. This is used to keep a user logged in upon refreshing a page. Thus, when a user logs out the user's `:session_token` is reset and the session's `:session_token` is set to nil. This means there is no user currently logged in. Furthermore, React-Router was used to ensure that only logged in users can access the `/tasks` route, that contains the user's tasks; this is another step to ensure security.

```javascript
// route_util.jsx

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/tasks" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/welcome" />
    }
  />
);
```

### Higher-Order Components

A higher-order component is a function that takes a component and returns a new component. The task component renders all the tasks to the page. However, the tasks to display depends whether the user is looking at all tasks or only the tasks belonging to a particular list. Therefore, a higher-order component was used to display the tasks when a particular list is selected.

```javascript
// list_tasks_container.jsx

const ListTaskForm = props => {
  return <TaskForm {...this.props} />;
};
```

Then, the `TaskForm` component will render the tasks. The `TaskForm` is not concerned with whether AllTasks is selected or a particular list, it simply renders the tasks passed to it.

## Future Implementations

* Add transition Features
* Add tabs for incomplete/complete tasks
* Add 'overdue' section to summary
