import React from 'react';
import { Redirect } from 'react-router-dom';

class taskForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {body: '', due_date: '', status: '', note: '', list_id: '', selectedTaskIds: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectionAction = this.selectionAction.bind(this);
  }

  update(type){
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  componentDidMount() {
    this.props.action(this.props.match.params.listId);
  }

  handleSubmit(e){
    return e => {
      e.preventDefault();
      const newTask = Object.assign({}, this.state);
      if (this.props.formType === 'list_task') {
        Object.assign(newTask, {list_id: this.props.match.params.listId});
      }
      this.props.createTask(newTask).then(() => this.setState({body: ''}));
    };
  }

  selectionAction (id) {
    const selectedIds = Object.assign([], this.state.selectedTaskIds );
    const last = this.props.match.url;

    if (selectedIds.length === 0) {
      const path = last +  '/' + id + '/edit';
      this.props.history.push(path)
    } else {
      this.props.history.push(last);
      if (selectedIds.length > 1) {
        console.log('FORM'); // Add form to delete all tasks
      }
    }

    if (selectedIds.includes(id)) {
      const idx = selectedIds.indexOf(id);
      selectedIds.splice(idx, 1);
      this.setState({selectedTaskIds: selectedIds});
    } else {
      selectedIds.push(id);
      this.setState({selectedTaskIds: selectedIds});
    }

  }

  isChecked (id) {
    this.state.selectedTaskIds.includes(id)
  }


  render () {
    const allTasks = this.props.tasks.map(task => {
      return (
        <label key={task.id} className="Lifazul">
          <input onClick={() => this.selectionAction(task.id)} checked={this.isChecked(task.id)} type='checkbox' name='selection' />
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
