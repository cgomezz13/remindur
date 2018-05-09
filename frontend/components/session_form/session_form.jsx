import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = this.props.info;
    this.update = this.update.bind(this);
  }

  update(info) {
    return e => {
      this.setState({[info]: this.state.info})
    }
  }

  render () {
    const target = Object.keys(this.props.info)

    let inputType;
    let inputs = target.map(info => {
      if (info==='Password'){
        inputType='password';
      } else {
        inputType='text';
      }
      return (
        <input onChange={this.update(info)} type={inputType} value={this.state.password} placeholder={info} />
      )
    })

    return (
      <form onSubmit={()=>this.props.action(this.state)}>
        {inputs}
        <input type='submit' value={this.props.formType}></input>
      </form>
    );
  }

}

export default SessionForm;
