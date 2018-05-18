import React from 'react';
import GearDropdown from './dropdown'


class userHomepage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {query: '', results: []};
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch() {
    return e => {
      const query = e.target.value
      let newResults = Object.assign([], this.state.results);

      this.props.tasks.forEach(task => {
        if (task.body.toLowerCase().slice(0, query.length) === query && !newResults.includes(task.body)) {
          newResults.push(task.body);
        }
      })

      newResults.forEach(result => {
        if (result.toLowerCase().slice(0, query.length) !== query) {
          const index = newResults.indexOf(result)
          newResults.splice(index, 1);
        }
      })

      if (query === '') {
        newResults = [];
      }
      this.setState({query: query});
      this.setState({results: newResults})
    };
  }



  render () {
    console.log(this.state.results);
    const searchResults = this.state.results.map((body, idx) => {
      return (
        <li key={idx}>{body}</li>
      )
    })

    console.log(searchResults)

    return (
      <header className='user-page-navbar'>

        <section className='user-nav-left'>
          <input onChange={this.handleSearch()} type='text' placeholder= 'Search...' value={this.state.query}></input>
          <ul>
            {searchResults}
          </ul>
        </section>


        <GearDropdown user={this.props.current_user} logout={this.props.logout}/>


      </header>
    )
  }
}
export default userHomepage;
