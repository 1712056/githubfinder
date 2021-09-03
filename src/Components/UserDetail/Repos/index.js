import React from "react";
import "./Repos.css";

function Repos(props) {
  const { repo } = props;
  return (
    <div className="repo col-lg-6 col-md-12">
      <a href={repo.html_url}>
        <h3>{repo.name}</h3>
      </a>
      <span>
        Forked form:
        <a href={repo.forks_url} target="_blank" rel="noreferrer">{repo.forks_url}</a>
      </span>
      <p className="description">{repo.description}</p>
    </div>
  );
}

export default Repos;
