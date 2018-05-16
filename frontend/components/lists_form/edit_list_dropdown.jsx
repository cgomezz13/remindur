import React from 'react';

class EditListDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {list_title: this.props.list.list_title, dropdownVisibility: false, modalVisibility: false};
    this.changeDropdownVisibility = this.changeDropdownVisibility.bind(this);
    this.changeModalVisibility = this.changeModalVisibility.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeDropdownVisibility () {
    this.setState({dropdownVisibility: !this.state.dropdownVisibility})
  }

  changeModalVisibility () {
    this.setState({modalVisibility: !this.state.modalVisibility})
    console.log('here');
  }


  handleDelete (id) {
    return e => {
      e.preventDefault();
      this.props.delete(id);
    }
  }

  handleSubmit () {
    const updatedList = Object.assign({}, this.props.list, {list_title: this.state.list_title});
    this.props.update(updateList);
  }

  update () {
    return e => {
      this.setState({list_title: e.target.value})
    }
  }


  render () {
    const editList = (
      <section>
        <li>
          <button onClick={()=>this.changeModalVisibility()} className='edit-list'>Rename List</button>
        </li>

        <div id='myModal' className={this.state.modalVisibility ? 'visible-list-modal' : 'hidden-list-modal'}>
          <div className='modal-content'>
            <span onClick={() => this.changeModalVisibility()} className='close'>&times;</span>
            <h1>Rename list</h1>
            <form onSubmit={this.handleSubmit}>
              <label>List name:</label>
              <input onChange={this.update()} type='text' value={this.state.list_title}></input>
              <input type='submit' value='Rename'></input>
            </form>
          </div>
        </div>

      </section>
    );

    const deleteList = (
      <li>
        <button onClick={this.handleDelete(this.props.list.id)} className='delete-list'>Delete List</button>
      </li>
    );


    return (
      <section>
        <div className='list-dropdown' onClick={()=>this.changeDropdownVisibility()}>
          <i className="fas fa-caret-down" id='list-dropdown'></i>
        </div>

        <div className={this.state.dropdownVisibility ? 'visible-list-dropdown' : 'hidden-list-dropdown'}>
          {deleteList}
          {editList}
        </div>

      </section>
    )
  }
}

export default EditListDropdown;
