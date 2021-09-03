import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CardUser from "../../Components/UserDetail/CardUser";
import Repos from "../../Components/UserDetail/Repos";
import "./UserDetail.css";
import userApi from "./../../services/user.js";

function UserDetail() {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const history = useHistory();
  useEffect(() => {
    userApi
      .fetchUserInfo(username)
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e));
  }, [username]);
  useEffect(() => {
    userApi
      .fetchUserRepo(username)
      .then((res) => setRepos(res.data))
      .catch((e) => console.log(e));
  }, [username]);
  const onBack = () => {
    history.goBack();
  };
  return (
    <div className="user_info">
      <div className="back btn btn-light" onClick={onBack}>
        <i className="fas fa-arrow-left"></i>
        <span>Back to home</span>
      </div>
      <span>
        <strong>Hireable: </strong>
        <i className="fas fa-check-cicle"></i>
      </span>
      <CardUser user={user} />
      <div className="follower">
        <div className="btn btn-primary">Followers: {user.followers}</div>
        <div className="btn btn-success">Following: {user.following}</div>
        <div className="btn btn-light">Public repos: {user.public_repos}</div>
        <div className="btn btn-dark">Public gists: {user.public_gists}</div>
      </div>
      <h2>Repositories</h2>
      <div className="repos row">
        {repos.map((repo, index) => {
          return <Repos key={index} repo={repo} />;
        })}
      </div>
    </div>
  );
}

export default UserDetail;
