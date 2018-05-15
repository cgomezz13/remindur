import React from 'react';

class EditTask extends React.Component {
  constructor (props) {
    super(props);

    this.state = this.props.task
  }

  componentWillMount () {
    this.props.fetchAllTasks();
  }

  render() {
    debugger
    return (
      <h1>hello</h1>
    )

  }
}

export default EditTask;
