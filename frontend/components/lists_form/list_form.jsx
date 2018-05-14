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
      <section className='lists-siderbar'>
        <h2>L I S T S</h2>
        <ul className='list-titles'>{allLists}</ul>
      </section>
    )

  }
}

export default ListForm;
