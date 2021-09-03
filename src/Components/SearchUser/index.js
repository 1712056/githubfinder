import React, { Component } from "react";
import './SearchUser.css'
export default class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };


  onSubmitForm = (e) => {
      e.preventDefault();
      this.props.fetchUsers(this.state.search);
  }
  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            name="search"
            className="search_input"
            id="search"
            placeholder="Search..."
            value={search}
            onChange={this.onSearchChange}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    );
  }
}
