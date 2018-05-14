import React from 'react';
import { Link } from 'react-router-dom';

class ListForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {list_title: '', visible: false}
    this.changeVisibility = this.changeVisibility.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount () {
    this.props.fetchAllLists();
  }

  changeVisibility () {
    this.setState({visible: !this.state.visible });
  }

  update(type) {
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    const list = Object.assign({}, {list_title: this.state.list_title});
    this.changeVisibility();
    this.setState({['list_title']: ''});
    this.props.createNewList(list);
  }

  render () {
    const allLists = this.props.lists.map(list => {
      return (
        <li key={list.id}>

          <Link to={`/lists/${list.id}/tasks`}>{list.list_title}</Link>

        </li>
      )
    })


    return (
      <section className='main-siderbar'>
        <section>
          <h2>T A S K S</h2>
          <li>
            <Link to={'/tasks'}>All Tasks</Link>
          </li>
        </section>


        <header className='list-titles'>

          <h2>L I S T S </h2>

          <button id='list-btn' onClick={()=>this.changeVisibility()}><i className="fas fa-plus"></i></button>

          <div id='myModal' className={this.state.visible ? 'visible-list-modal' : 'hidden-list-modal'}>
            <div className='modal-content'>
              <span onClick={()=>this.changeVisibility()} className="close">&times;</span>
              <h1>Add a List</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Please enter a list name:</label>
                <input onChange={this.update('list_title')} type='text' value={this.state.list_title}></input>
                <input type='submit' value='Add'></input>
              </form>
            </div>
          </div>

        </header>




        <ul className='list-titles'>{allLists}</ul>
      </section>
    )

  }
}

export default ListForm;
