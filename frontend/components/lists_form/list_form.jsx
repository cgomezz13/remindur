import React from 'react';

class ListForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {list_title: '', visible: false}
    this.changeVisibility = this.changeVisibility.bind(this);
  }

  componentWillMount () {
    this.props.fetchAllLists();
  }

  changeVisibility () {
    this.setState({visible: !this.state.visible });
  }

  render () {
    const allLists = this.props.lists.map(list => {
      return (
        <li key={list.id}>{list.list_title}</li>
      )
    })

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("list-btn");

    var close = document.getElementsByClassName("close")[0];


    return (
      <section className='lists-siderbar'>
        <header className='list-titles'>
          <h2>L I S T S </h2>

          <button id='list-btn' onClick={()=>this.changeVisibility()}><i className="fas fa-plus"></i></button>

          <div id='myModal' className={this.state.visible ? 'visible-list-modal' : 'hidden-list-modal'}>
            <div className='modal-content'>
              <span className="close">&times;</span>
              <h1>Add a List</h1>
              <form>
                <label>Please enter a list name:</label>
                <input type='text'></input>
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
