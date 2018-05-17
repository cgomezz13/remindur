import React from 'react';

class EditTask extends React.Component {
  constructor (props) {
    super(props);

    this.state = {list: this.props.list, task: this.props.task};
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllTasks();
  }

  componentWillReceiveProps (newProps) {
    this.setState({list: newProps.list, task: newProps.task})
  }

  updateBody() {
    return e => {
      const newState = this.state.task
      newState.body = e.target.value
      this.setState(newState)
    }
  }

  handleSubmit (e) {
    return e => {
      e.preventDefault();
      this.props.update(this.state.task);
    };
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

    const complete = 'Complete';
    const incomplete = 'Incomplete';

    return (
      <section className='edit-task-form'>
        <h1>Details</h1>
        {title}
        <form onSubmit={this.handleSubmit()}>
          <textarea type='text' onChange={this.updateBody()} value={this.state.task.body}></textarea>
          <input type='submit' value='Update'></input>
        </form>

        <h1>Status</h1>
        <section className='task-Status'>
          <input type='radio' value='true' name='status' ></input><label>Complete</label>
          <input type='radio' value='false' name='status'></input><label>Incomplete</label>
        </section>

        <h1>Notes:</h1>
        <h1>{this.state.task.note}</h1>



      </section>
    )

  }
}

export default EditTask;
