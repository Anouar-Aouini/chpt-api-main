import React from "react";
import { Link } from "react-router-dom";
const DetailsUser = ({ users, match }) => {
  //users.filter((user) => user.id === match.params.userId);
  return (
    <div>
      {users.filter((user)=><div>
        <div className="card">
        <h5 className="card-title">{user.address}</h5>
        <p className="card-text">{user.website}</p>
        <p className="card-text">{user.company.name}</p>
        <Link to={"/"}>
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
      </div>)}
    </div>
  );
};

export default DetailsUser;
