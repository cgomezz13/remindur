import React from 'react';

class EditTask extends React.Component {
  constructor (props) {
    super(props);

    this.state = {list: this.props.list, task: this.props.task};
    this.updateBody = this.updateBody.bind(this);
  }

  componentWillMount () {
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
    const notes = this.state.task.note

    return (
      <section className='edit-task-form'>
        <h1>Task Details</h1>

        <form onSubmit={this.handleSubmit()}>
          <textarea type='text' onChange={this.updateBody()} value={this.state.task.body}></textarea>
          <input type='submit' value='Update'></input>
        </form>

        <label> Completed: {this.state.task.note} </label>


        <h2>Notes</h2>


      </section>
    )

  }
}

export default EditTask;
