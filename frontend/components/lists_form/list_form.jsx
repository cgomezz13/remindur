import React from "react";
import { Link } from "react-router-dom";
import EditListDropdown from "./edit_list_dropdown";

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list_title: "",
      visible: false,
      error: ""
    };
    this.changeVisibility = this.changeVisibility.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLists();
  }

  changeVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = Object.assign({}, { list_title: this.state.list_title });
    this.props.createNewList(list).then(() => {
      this.setState({ ["list_title"]: "" });
      this.setState({ ["error"]: "" });
      if (!this.props.errors[0]) {
        this.changeVisibility();
      }
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return <h1>{this.props.errors}</h1>;
    }
  }

  render() {
    const allLists = this.props.lists.map(list => {
      return (
        <li key={list.id}>
          <Link className="list-link" to={`/lists/${list.id}/tasks`}>
            {list.list_title}
          </Link>
          <EditListDropdown
            list={list}
            update={this.props.updateList}
            delete={this.props.deleteList}
          />
        </li>
      );
    });

    const error = () => {
      return <div>{this.state.error}</div>;
    };

    return (
      <section className="main-siderbar">
        <section>
          <h2>T A S K S</h2>
          <li>
            <Link to={"/tasks"}>All Tasks</Link>
          </li>
        </section>

        <header className="list-titles">
          <h2>L I S T S </h2>

          <button id="list-btn" onClick={() => this.changeVisibility()}>
            <i className="fas fa-plus" />
          </button>
        </header>

        <div
          id="myModal"
          className={
            this.state.visible ? "visible-list-modal" : "hidden-list-modal"
          }
        >
          <div className="modal-content">
            <span onClick={() => this.changeVisibility()} className="close">
              &times;
            </span>
            <h1>Add a List</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Please enter a list name:</label>
              <input
                onChange={this.update("list_title")}
                type="text"
                value={this.state.list_title}
              />
              <div>{this.state.error}</div>
              <div>{this.renderErrors()}</div>
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>

        <ul className="list-titles">{allLists}</ul>
      </section>
    );
  }
}

export default ListForm;
