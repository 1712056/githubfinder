import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";
import Users from "../../Components/Users";
import userApi from "./../../services/user";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  fetchUsers = (search) => {
    userApi.fetchUser(search)
      .then((res) => this.setState({ users: res.data.items }))
      .catch((e) => {
        console.log(e);
      });
  };
  clearUsers  = ()=>{
    this.setState({ users: [] });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <SearchUser fetchUsers={this.fetchUsers} />
        <Users users={users} clearUsers={this.clearUsers} />
      </div>
    );
  }
}
