import React from 'react';

class EditListDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {visible: false};
    this.changeVisibility = this.changeVisibility.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeVisibility () {
    this.setState({visible: !this.state.visible})
  }

  handleDelete (id) {
    return e => {
      e.preventDefault();
      this.props.delete(id);
    }
  }

  render () {
    // const editList = (
    //   <li>
    //     <button onClick={this.props.updateList} className='edit-list'>Edit List Name</button>
    //   </li>
    // );

    const deleteList = (
      <li>
        <button onClick={this.handleDelete(this.props.list.id)} className='delete-list'>Delete List</button>
      </li>
    );


    return (
      <section>
        <div className='list-dropdown' onClick={()=>this.changeVisibility()}>
          <i className="fas fa-caret-down" id='list-dropdown'></i>
        </div>

        <div className={this.state.visible ? 'visible-list-dropdown' : 'hidden-list-dropdown'}>
          {deleteList}
        </div>

      </section>
    )
  }
}

export default EditListDropdown;
