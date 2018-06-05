import React from "react";
import { withRouter, Link } from "react-router-dom";
import generateQuote from "../../util/quote_util";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === "signup") {
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
      };
    } else {
      this.state = { username: "", password: "" };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(info) {
    return e => {
      this.setState({ [info]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  renderErrors() {
    return (
      <ul className="sessionErrors">
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let signin, link, button, text, demo, demotext, message;
    if (this.props.formType === "signup") {
      link = "/login";
      button = "Sign Up";
      text = "Log In";
      message = <div className="session-message">Create an account.</div>;
      signin = (
        <div>
          <input
            className="sign-up-inputs"
            onChange={this.update("first_name")}
            type="text"
            value={this.state.fname}
            placeholder={"First Name"}
          />
          <input
            className="sign-up-inputs"
            onChange={this.update("last_name")}
            type="text"
            value={this.state.lname}
            placeholder={"Last Name"}
          />
          <input
            className="sign-up-inputs"
            onChange={this.update("email")}
            type="email"
            value={this.state.email}
            placeholder={"Email"}
          />
        </div>
      );
    } else {
      link = "/signup";
      text = "Sign Up";
      button = "Log In";
      demotext = "Login Demo";
      message = <div className="session-message">Welcome back!</div>;
      demo = (
        <button
          className="button"
          onClick={e => {
            e.preventDefault();
            this.props.action(this.props.demo);
          }}
        >
          {demotext}{" "}
        </button>
      );
    }

    const getQuote = () => {
      const { quote, author } = generateQuote();
      return (
        <section className="quote">
          <p>{quote}</p>
          <p>{author}</p>
        </section>
      );
    };

    const info = (
      <div className="left-side-info">
        Stop thinking of all your to-dos, let the take care of that. Get
        reminded anywhere!
      </div>
    );

    return (
      <section className="session-page">
        <section className="session-page-left-side">
          <Link to={"/welcome"}>
            <h1>icon?</h1>
          </Link>
          {info}
        </section>

        <section className="session-page-right-side">
          <Link className="alt-link" to={link}>
            {text}
          </Link>
          {this.renderErrors()}
          <form className="form" onSubmit={this.handleSubmit}>
            {message}
            {signin}
            <input
              className="login-inputs"
              onChange={this.update("username")}
              type="text"
              value={this.state.username}
              placeholder={"Username"}
            />
            <input
              className="login-inputs"
              onChange={this.update("password")}
              type="password"
              value={this.state.password}
              placeholder={"Password"}
            />
            <input
              className="button"
              type="submit"
              value={button}
              style={{ marginTop: "8px", marginBottom: "12px" }}
            />
            {demo}
          </form>
        </section>
      </section>
    );
  }
}

export default SessionForm;
