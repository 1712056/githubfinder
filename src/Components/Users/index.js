import React from "react";
import UserItem from "../UserItem";
import "./Users.css";

export default function Users(props) {
  const { users } = props;
  const onClearUsers = (e) => {
    return props.clearUsers();
  };
  return (
    <div>
      {users.length > 0 ? (
        <button
          className="clear_users btn btn-secondary"
          onClick={onClearUsers}
        >
          Clear users
        </button>
      ) : (
        ""
      )}
      <div className="users row">
        {users.map((user, index) => {
          return <UserItem user={user} key={index} />;
        })}
      </div>
    </div>
  );
}
