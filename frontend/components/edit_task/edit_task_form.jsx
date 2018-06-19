import React from "react";

// task has status, complete='true' incomplete='false'

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = { list: this.props.list, task: this.props.task };
    this.updateBody = this.updateBody.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateDueDate = this.updateDueDate.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTasks();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ list: newProps.list, task: newProps.task });
  }

  updateBody() {
    return e => {
      this.state.task.body = e.target.value;
      this.setState(this.state.task);
    };
  }

  updateStatus() {
    return e => {
      if (e.target.value === "true") {
        this.state.task.status = true;
      }
      if (e.target.value === "false") {
        this.state.task.status = false;
      }
      this.setState(this.state.task);
    };
  }

  updateDueDate() {
    return e => {
      this.state.task.due_date = e.target.value;
      this.setState(this.state.task);
    };
  }

  updateNote() {
    return e => {
      this.state.task.note = e.target.value;
      this.setState(this.state.task);
    };
  }

  handleDelete(id) {
    this.props.deleteTask(id).then(() => {
      this.props.history.push("/tasks");
    });
  }

  handleSubmit(e) {
    return e => {
      e.preventDefault();
      this.props.updateTask(this.state.task).then(() => {
        const currentUrl = this.props.location.pathname.split("/");
        currentUrl.splice(-2, 2);
        const redirectToUrl = currentUrl.join("/");
        this.props.history.push(redirectToUrl);
      });
    };
  }

  handleClose() {
    const currentUrl = this.props.location.pathname.split("/");
    currentUrl.splice(-2, 2);
    const redirectToUrl = currentUrl.join("/");
    this.props.history.push(redirectToUrl);
  }

  render() {
    const notes = this.state.task.note;
    let title;
    if (this.props.list.list_title) {
      const taskTitle = this.props.list.list_title;
      title = <h1>List : {taskTitle}</h1>;
    } else {
      title = null;
    }

    return (
      <section className="edit-task-form">
        <div onClick={() => this.handleClose()} className="edit-close">
          &times;
        </div>
        <div className="edit-task-info">
          <h1>Details</h1>
          <span>
            <button
              id="delete-task-button"
              onClick={() => this.handleDelete(this.state.task.id)}
            >
              Delete Task
            </button>
          </span>

          {title}

          <form onSubmit={this.handleSubmit()}>
            <textarea
              type="text"
              onChange={this.updateBody()}
              value={this.state.task.body}
            />

            <h1>Status</h1>
            <section className="task-Status">
              <li>
                <input
                  onChange={this.updateStatus()}
                  type="radio"
                  value="true"
                  name="status"
                  checked={this.state.task.status === true}
                />
                <label>Complete</label>
              </li>
              <li>
                <input
                  onChange={this.updateStatus()}
                  type="radio"
                  value="false"
                  name="status"
                  checked={this.state.task.status === false}
                />
                <label>Incomplete</label>
              </li>
            </section>

            <div className="due-date">
              <h1>Due:</h1>
              <input
                onChange={this.updateDueDate()}
                type="date"
                name="due-date"
                value={this.state.task.due_date}
              />
            </div>

            <h1>Note:</h1>
            <input
              onChange={this.updateNote()}
              className="task-notes"
              type="text"
              value={this.state.task.note}
            />

            <input type="submit" value="Update" />
          </form>
        </div>
      </section>
    );
  }
}

export default EditTask;
