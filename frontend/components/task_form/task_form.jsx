import React from 'react';


class taskForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {body: '', due_date: '', status: '', note: '', list_id: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(type){
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  componentDidMount() {
    this.props.fetchAllTasks();
  }

  handleSubmit(e){
    e.preventDefault();
    const newTask = Object.assign({}, this.state);
    this.props.createTask(newTask)
  }


  render () {
    const allTasks = this.props.tasks.map(task => {
      return (
        <li key='task.id' id='task items'>{task.body}</li>
      )
    });

    return (
      <section>
        <h1>HERE</h1>
        <form onSubmit={this.handleSubmit} className='task-form'>
          <input onChange={this.update('body')} type='text' value={this.state.body} placeholder='Add a Task'/>
          <input type='submit' />
        </form>
        <ul>{allTasks}</ul>
      </section>
    )
  }
}

export default taskForm;
