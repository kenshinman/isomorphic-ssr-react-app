import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <h3>Here's a List of Users:</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData };

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersListPage),
  loadData
};
