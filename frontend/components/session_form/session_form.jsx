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

  componentDidMount() {}

  renderError(info) {
    if (
      Object.keys(this.props.errors).length !== 0 &&
      Boolean(this.props.errors[info])
    ) {
      const msg = this.props.errors[info];
      info = info.charAt(0).toUpperCase() + info.slice(1);
      if (info.includes("_")) {
        info = info.replace("_", " ");
      }
      const errorMessage = info + " " + msg;
      return (
        <ul className="sessionErrors">
          <li className="error" key={`error`}>
            {errorMessage}
          </li>
        </ul>
      );
    }
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
          {this.renderError("first_name")}
          <input
            className="sign-up-inputs"
            onChange={this.update("last_name")}
            type="text"
            value={this.state.lname}
            placeholder={"Last Name"}
          />
          {this.renderError("last_name")}
          <input
            className="sign-up-inputs"
            onChange={this.update("email")}
            type="email"
            value={this.state.email}
            placeholder={"Email"}
          />
          {this.renderError("email")}
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
        Stop thinking of all your to-dos, let us take care of that. Get reminded
        anywhere!
      </div>
    );

    return (
      <section className="session-page">
        <section className="session-page-left-side">
          <Link to={"/welcome"} />
          {info}
        </section>

        <section className="session-page-right-side">
          <Link className="alt-link" to={link}>
            {text}
          </Link>

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
            {this.renderError("username")}
            <input
              className="login-inputs"
              onChange={this.update("password")}
              type="password"
              value={this.state.password}
              placeholder={"Password"}
            />
            {this.renderError("password")}
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
