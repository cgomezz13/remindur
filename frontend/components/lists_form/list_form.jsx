import React from 'react';

class ListForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {list_title: ''}
  }

  componentWillMount () {
    this.props.fetchAllLists();
  }

  render () {
    const allLists = this.props.lists.map(list => {
      return (
        <li key={list.id}>{list.list_title}</li>
      )
    })

    return (
      <section className='list-titles'>
        <h2>New Lists Go Below</h2>
        {allLists}
      </section>
    )

  }
}

export default ListForm;
