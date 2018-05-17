import React from 'react';

// taskk has status, complete='true' incomplete='false'

class EditTask extends React.Component {
  constructor (props) {
    super(props);

    this.state = {list: this.props.list, task: this.props.task};
    this.updateBody = this.updateBody.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateDueDate = this.updateDueDate.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllTasks();
  }

  componentWillReceiveProps (newProps) {
    this.setState({list: newProps.list, task: newProps.task})
  }

  updateBody() {
    return e => {
      this.state.task.body = e.target.value;
      this.setState(this.state.task);
    }
  }

  updateStatus () {
    return e => {
      if (e.target.value==='true') { (this.state.task.status = true); }
      if (e.target.value==='false') { (this.state.task.status = false); }
      this.setState(this.state.task);
    }
  }

  updateDueDate () {
    return e => {
      this.state.task.due_date = e.target.value;
      this.setState(this.state.task)
    }
  }

  handleSubmit (e) {
    return e => {
      e.preventDefault();
      this.props.updateTask(this.state.task).then(() => {
        const currentUrl = this.props.location.pathname.split('/');
        currentUrl.splice(-2, 2);
        const redirectToUrl = currentUrl.join('/');
        this.props.history.push(redirectToUrl);
      });
    };
  }

  handleDelete (id) {
    this.props.deleteTask(id).then(() => {
      this.props.history.push('/tasks');
    })
  }

  render() {
    const notes = this.state.task.note;
    let title;
    if (this.props.list.list_title) {
      const taskTitle = this.props.list.list_title;
      title = <h1>List : {taskTitle}</h1>
    } else {
      title = null;
    }


    return (
      <section className='edit-task-form'>
        <h1>Details</h1>
        {title}

        <button id='delete-task-button' onClick={() => this.handleDelete(this.state.task.id)}>Delete Task</button>
        <form onSubmit={this.handleSubmit()}>
          <textarea type='text' onChange={this.updateBody()} value={this.state.task.body}></textarea>


        <h1>Status</h1>
        <section className='task-Status'>
          <input onChange={this.updateStatus()} type='radio' value='true' name='status' checked={this.state.task.status === true } ></input><label>Complete</label>
          <input onChange={this.updateStatus()} type='radio' value='false' name='status' checked={this.state.task.status === false } ></input><label>Incomplete</label>
        </section>

        <h1>Due</h1>
        <input onChange= {this.updateDueDate()} type='date' name='due-date' value={this.state.task.due_date}></input>

        <h1>Notes:</h1>
        <input type='text' value={this.state.task.note}></input>

        <input type='submit' value='Update'></input>
        </form>

      </section>
    )

  }
}

export default EditTask;
