import React from "react";
import { useHistory } from "react-router-dom";
import "./UserItem.css";
export default function UserItem(props) {
  const { login: username, avatar_url } = props.user;
  let history = useHistory();

  const onMore = () => {
    history.push(`/user/${username}`);
  };
  return (
    <div className="user col col-lg-4 col-md-6 col-12">
      <div className="avatar">
        <img src={avatar_url} alt="avatar" />
      </div>
      <p className="username">{username}</p>
      <button className="btn btn-secondary" onClick={onMore}>
        MORE
      </button>
    </div>
  );
}
