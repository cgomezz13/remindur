import React from "react";
import { withRouter } from "react-router-dom";

class EditListDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list_title: this.props.list.list_title,
      dropdownVisibility: false,
      modalVisibility: false,
      error: ""
    };
    this.changeDropdownVisibility = this.changeDropdownVisibility.bind(this);
    this.changeModalVisibility = this.changeModalVisibility.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.avoidDBError = this.avoidDBError.bind(this);
  }

  changeDropdownVisibility() {
    this.setState({ dropdownVisibility: !this.state.dropdownVisibility });
  }

  changeModalVisibility() {
    this.setState({ modalVisibility: !this.state.modalVisibility });
  }

  handleDelete(id) {
    return e => {
      e.preventDefault();
      this.props.delete(id).then(() => {
        const listUrlId = +this.props.location.pathname.split("/")[2];
        if (id === listUrlId) {
          this.props.history.push("/tasks");
        }
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ ["error"]: "" });
    this.props.clearErrors();
    if (this.state.list_title.length === 0) {
      this.avoidDBError();
    } else {
      const updatedList = Object.assign({}, this.props.list, {
        list_title: this.state.list_title
      });
      const that = this;
      this.props.update(updatedList).then(() => {
        this.setState({ ["error"]: "" });
        this.props.clearErrors();
        that.changeModalVisibility();
        that.changeDropdownVisibility();
      });
    }
  }

  avoidDBError() {
    this.setState({ ["error"]: "List title can't be blank!!!" });
  }

  update() {
    return e => {
      this.setState({ list_title: e.target.value });
    };
  }

  handleClose() {
    this.setState({ ["list_title"]: this.props.list.list_title });
    this.setState({ ["error"]: "" });
    this.props.clearErrors();
    this.changeModalVisibility();
    this.changeDropdownVisibility();
  }

  render() {
    debugger;
    const editList = (
      <li>
        <button
          onClick={() => this.changeModalVisibility()}
          className="edit-list"
        >
          Rename List
        </button>
        <div
          id="listModal"
          className={
            this.state.modalVisibility
              ? "visible-edit-list-modal"
              : "hidden-edit-list-modal"
          }
        >
          <div className="modal-edit-content">
            <span onClick={() => this.handleClose()} className="edit-close">
              &times;
            </span>
            <h1>Rename list</h1>
            <form onSubmit={this.handleSubmit}>
              <label>List name:</label>
              <input
                onChange={this.update()}
                type="text"
                value={this.state.list_title}
              />
              {this.state.error}
              {this.props.errors}
              <input type="submit" value="Rename" />
            </form>
          </div>
        </div>
      </li>
    );

    const deleteList = (
      <li>
        <button
          onClick={this.handleDelete(this.props.list.id)}
          className="delete-list"
        >
          Delete List
        </button>
      </li>
    );

    return (
      <section>
        <div
          className="list-dropdown"
          onClick={() => this.changeDropdownVisibility()}
        >
          <i className="fas fa-caret-down" id="list-dropdown" />
        </div>

        <div
          className={
            this.state.dropdownVisibility
              ? "visible-list-dropdown"
              : "hidden-list-dropdown"
          }
        >
          {deleteList}
          {editList}
        </div>
      </section>
    );
  }
}

export default withRouter(EditListDropdown);
