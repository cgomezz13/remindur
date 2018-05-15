import React from 'react';
import { Redirect } from 'react-router-dom';

class taskForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {body: '', due_date: '', status: '', note: '', list_id: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectionAction = this.selectionAction.bind(this);
  }

  update(type){
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  componentWillMount() {
    if (this.props.formType === 'no_list') {
      this.props.action();
    }
  }

  handleSubmit(e){
    return e => {
      e.preventDefault();
      const newTask = Object.assign({}, this.state);
      if (this.props.formType === 'list_task') {
        Object.assign(newTask, {['list_id']: this.props.match.params.listId});
      }
      this.setState({['body']: ''});
      this.props.createTask(newTask)
    };
  }

  selectionAction (id) {
    const path = this.props.match.url +  '/' + id + '/edit';
    this.props.history.push(path);
  }


  render () {
    const allTasks = this.props.tasks.map(task => {
      return (
        <label key={task.id} className="Lifazul">
          <input onChange={() => this.selectionAction(task.id)} type='checkbox' name='selection' />
          <span>{task.body}</span>
        </label>
      )
    });

    return (

        <section className='main-form'>
          <h1>Tasks</h1>
          <form onSubmit={this.handleSubmit()} className='task-form'>
            <input onChange={this.update('body')} type='text' value={this.state.body} placeholder='Add a Task'/>
            <input type='submit' value='Add Task' />
          </form>
          <section className='list-items'>
            <ul>{allTasks}</ul>
          </section>
        </section>

    )
  }
}

export default taskForm;
