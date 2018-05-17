import React from 'react';

// taskk has status, complete='true' incomplete='false'

class EditTask extends React.Component {
  constructor (props) {
    super(props);

    this.state = {list: this.props.list, task: this.props.task};
    this.update = this.update.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllTasks();
  }

  componentWillReceiveProps (newProps) {
    this.setState({list: newProps.list, task: newProps.task})
  }

  update(type) {
    return e => {
      // const newState = this.state.task
      debugger
      this.state.task[type] = e.target.value
      this.setState(this.state.task)
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


    return (
      <section className='edit-task-form'>
        <h1>Details</h1>
        {title}
        <form onSubmit={this.handleSubmit()}>
          <textarea type='text' onChange={this.update('body')} value={this.state.task.body}></textarea>
          <input type='submit' value='Update'></input>
        </form>

        <h1>Status</h1>
        <section className='task-Status'>
          <input onChange={this.update('status')} type='radio' value='true' name='status' checked={this.props.task.status === true} ></input><label>Complete</label>
          <input onChange={this.update('status')} type='radio' value='false' name='status' checked={this.props.task.status === false} ></input><label>Incomplete</label>
        </section>

        <h1>Notes:</h1>
        <h1>{this.state.task.note}</h1>



      </section>
    )

  }
}

export default EditTask;
