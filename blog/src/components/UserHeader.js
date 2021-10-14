import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const user = this.props.users.find(
      (user) => user.id === this.props.user.name
    );

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

export default connect(null, { fetchUser })(UserHeader);
