import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);

    if (this.props.formType==='signup') {
      this.state = {fname: '', lname: '', email: '', username: '', password: ''};
    } else {
      this.state = {username: '', password: ''};
    }

  }

  update(info) {
    return e => {
      this.setState({[info]: e.target.value })
    }
  }

  render () {
    let signin;
    if (this.props.formType==='signup') {
      signin = (
        <section>
          <input onChange={this.update('fname')} type="text" value={this.state.fname} placeholder={'First Name'} />
          <input onChange={this.update('lname')} type="text" value={this.state.lname} placeholder={'Last Name'} />
          <input onChange={this.update('email')} type="text" value={this.state.email} placeholder={'Email'} />
        </section>
      )
    }

    debugger
    return (
      <form onSubmit={()=>this.props.action(this.state)}>
        {signin}
        <input onChange={this.update('username')} type="text" value={this.state.username} placeholder={'Username'} />
        <input onChange={this.update('password')} type="text" value={this.state.password} placeholder={'Password'} />
        <input type='submit' value='Submit'></input>
      </form>
    );
  }

}

export default SessionForm;
