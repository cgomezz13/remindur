import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);

    if (this.props.formType==='signup') {
      this.state = {first_name: '', last_name: '', email: '', username: '', password: ''};
    } else {
      this.state = {username: '', password: ''};
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(info) {
    return e => {
      this.setState({[info]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    )
  }

  render () {
    let signin, link, button, text;
    if (this.props.formType==='signup') {
      link = '/login';
      button = 'Sign Up';
      text = 'Log In';
      signin = (
        <div>
          <input onChange={this.update('first_name')} type="text" value={this.state.fname} placeholder={'First Name'} />
          <input onChange={this.update('last_name')} type="text" value={this.state.lname} placeholder={'Last Name'} />
          <input onChange={this.update('email')} type="text" value={this.state.email} placeholder={'Email'} />
        </div>
      )
    } else {
      link = '/signup';
      text = 'Sign Up';
      button = 'Log In'
    }


    return (
      <section className='session-page'>

        <section className='session-page-left-side'>
          <h1>LEFT SIDE</h1>
        </section>

        <section className='session-page-right-side'>
          <Link to={link}>{text}</Link>
          <form className='form' onSubmit={this.handleSubmit} >
            {signin}
            <input onChange={this.update('username')} type="text" value={this.state.username} placeholder={'Username'} />
            <input onChange={this.update('password')} type="text" value={this.state.password} placeholder={'Password'} />
            <input id='button' type='submit' value={button}></input>
            {this.renderErrors()}
          </form>
        </section>

      </section>
    );
  }

}

export default SessionForm;
