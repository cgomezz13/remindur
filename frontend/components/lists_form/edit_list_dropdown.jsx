import React from 'react';
import { withRouter } from 'react-router-dom';

class EditListDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {list_title: this.props.list.list_title, dropdownVisibility: false, modalVisibility: false};
    this.changeDropdownVisibility = this.changeDropdownVisibility.bind(this);
    this.changeModalVisibility = this.changeModalVisibility.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  changeDropdownVisibility () {
    this.setState({dropdownVisibility: !this.state.dropdownVisibility})
  }

  changeModalVisibility () {
    this.setState({modalVisibility: !this.state.modalVisibility});
  }


  handleDelete (id) {
    return e => {
      e.preventDefault();
      this.props.delete(id).then(() => {
        const listUrlId = +this.props.location.pathname.split("/")[2]
        if (id === listUrlId) {
          this.props.history.push('/tasks')
        }
      });
    }
  }

  handleSubmit () {
    const updatedList = Object.assign({}, this.props.list, {list_title: this.state.list_title});
    this.props.update(updatedList).then(this.changeModalVisibility()).then(this.changeDropdownVisibility());
  }

  update () {
    return e => {
      this.setState({list_title: e.target.value})
    }
  }


  handleClose () {
    this.changeModalVisibility();
    this.changeDropdownVisibility();
  }

  render () {
    const editList = (

        <li>
          <button onClick={()=>this.changeModalVisibility()} className='edit-list'>Rename List</button>
          <div id='listModal' className={this.state.modalVisibility ? 'visible-edit-list-modal' : 'hidden-edit-list-modal'}>
            <div className='modal-edit-content'>
              <span onClick={() => this.handleClose()} className='edit-close'>&times;</span>
              <h1>Rename list</h1>
              <form onSubmit={this.handleSubmit}>
                <label>List name:</label>
                <input onChange={this.update()} type='text' value={this.state.list_title}></input>
                <input type='submit' value='Rename'></input>
              </form>
            </div>
          </div>
        </li>



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

export default withRouter(EditListDropdown);
