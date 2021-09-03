import React from "react";
import './CardUser.css';

function CardUser({user}) {
  return (
    <div className="cardUser">
      <div className="card_left">
        <img
          className="avatar"
          src={user.avatar_url}
          alt="avatar"
        ></img>
        <h2 className="fullname">{user.name}</h2>
        {user.location?<div>
          <strong>Location:</strong> <p>{user.location}</p>
        </div>:''}
      </div>
      <div className="card_right">
        <div>
          <strong>Username:</strong>
          <p>{user.login}</p>
        </div>
        {user.bio?<div>
          <strong>Bio:</strong> <p>{user.bio}</p>
        </div>:''}
        {user.company?<div>
          <strong>Company:</strong> <p>{user.company}</p>
        </div>:''}
        {user.blog?<div>
          <strong>Blog:</strong> <p>{user.blog}</p>
        </div>:''}
        <div>
          <a href={user.html_url} target="_blank" rel='noreferrer' className="btn btn-info">Visit Github profile</a>
        </div>
      </div>
    </div>
  );
}

export default CardUser;
