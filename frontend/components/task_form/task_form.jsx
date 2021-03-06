import React from "react";
import { Redirect } from "react-router-dom";

class taskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      due_date: "",
      status: "",
      note: "",
      list_id: "",
      selectedTaskIds: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectionAction = this.selectionAction.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.action(this.props.match.params.listId);
  }

  handleSubmit(e) {
    return e => {
      e.preventDefault();
      const newTask = Object.assign({}, this.state);
      if (this.props.formType === "list_task") {
        Object.assign(newTask, { list_id: this.props.match.params.listId });
      }
      this.props.createTask(newTask).then(() => this.setState({ body: "" }));
    };
  }

  selectionAction(id) {
    const selectedIds = Object.assign([], this.state.selectedTaskIds);
    const last = this.props.match.url;

    if (selectedIds.includes(id)) {
      const idx = selectedIds.indexOf(id);
      selectedIds.splice(idx, 1);
      this.setState({ selectedTaskIds: selectedIds });
    } else {
      selectedIds.push(id);
      this.setState({ selectedTaskIds: selectedIds });
    }

    if (selectedIds.length === 1) {
      const taskId = selectedIds[0];
      const path = last + "/" + taskId + "/edit";
      this.props.history.push(path);
      setTimeout(() => {
        document.getElementById("edit-task-form").style.right = "0%";
      }, 20);
    } else {
      this.props.history.push(last);
    }
  }

  isChecked(id) {
    this.state.selectedTaskIds.includes(id);
  }

  handleDeleteAll() {
    this.state.selectedTaskIds.forEach(id => {
      // let pos = this.state.selectedTaskIds.indexOf(id);
      // this.state.selectedTaskIds.splice(pos, 1);
      // this.setState({ selectedTaskIds: selectedTaskIds })
      this.props.deleteTask(id).then(this.setState({ selectedTaskIds: [] }));
    });
    // this.setState({ selectedTaskIds: [] });
  }

  render() {
    const allTasks = this.props.tasks.map(task => {
      return (
        <label key={task.id} className="all-tasks">
          <input
            onClick={() => this.selectionAction(task.id)}
            checked={this.isChecked(task.id)}
            type="checkbox"
            name="selection"
          />
          <span>{task.body}</span>
        </label>
      );
    });

    let button;
    if (!this.state.body) {
      button = (
        <input
          type="submit"
          value="Add Task"
          style={{ opacity: 0.4 }}
          disabled
        />
      );
    } else {
      button = <input type="submit" value="Add Task" />;
    }

    const status = this.props.tasks;
    let NumofCompleted = 0;
    let TotalTasks = 0;

    status.forEach(task => {
      TotalTasks++;
      if (task.status) {
        NumofCompleted++;
      }
    });

    let deleteAllOption;

    if (this.state.selectedTaskIds.length > 1) {
      deleteAllOption = (
        <button className="deleteAll" onClick={() => this.handleDeleteAll()}>
          Delete All Selected Tasks
        </button>
      );
    } else {
      deleteAllOption = "";
    }

    return (
      <section className="task-default-show">
        <section className="main-form">
          <h1>Tasks</h1>
          <form onSubmit={this.handleSubmit()} className="task-form">
            <input
              onChange={this.update("body")}
              type="text"
              value={this.state.body}
              placeholder="Add a Task"
            />
            {button}
          </form>
          <section className="list-items">
            <ul>{allTasks}</ul>
          </section>
        </section>

        <section
          className={
            this.state.selectedTaskIds.length === 0
              ? "visible-list-summary"
              : "hidden-list-summary"
          }
        >
          <ul>
            <label>
              <li>{TotalTasks}</li>
              Tasks
            </label>
            <label>
              <li>{NumofCompleted}</li>
              Completed
            </label>
          </ul>
        </section>

        <section
          className={
            this.state.selectedTaskIds.length > 1
              ? "visible-delete-option"
              : "hidden-delete-option"
          }
        >
          {deleteAllOption}
        </section>
      </section>
    );
  }
}

export default taskForm;
