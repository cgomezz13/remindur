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
    let signin, link, button, text, demo, demotext, message;
    if (this.props.formType==='signup') {
      link = '/login';
      button = 'Sign Up';
      text = 'Log In';
      message = <div id='session-message'>Create an account.</div>
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
      button = 'Log In';
      demotext = 'Login Demo';
      message = <div id='session-message'>Welcome back!</div>
      demo = <button id='button' onClick={()=>this.props.action(this.props.demo)}>{demotext}</button>;
    }


    return (
      <section className='session-page'>

        <section className='session-page-left-side'>
          <Link to={'/'}><h1>LEFT SIDE</h1></Link>
        </section>

        <section className='session-page-right-side'>
          <Link id='alt-link' to={link}>{text}</Link>
          {message}
          <form className='form' onSubmit={this.handleSubmit} >
            {signin}
            <input onChange={this.update('username')} type="text" value={this.state.username} placeholder={'Username'} />
            <input onChange={this.update('password')} type="text" value={this.state.password} placeholder={'Password'} />
            <input id='button' type='submit' value={button} style={{marginTop: "8px"}}></input>
            {this.renderErrors()}
            {demo}
          </form>
        </section>

      </section>
    );
  }

}

export default SessionForm;
