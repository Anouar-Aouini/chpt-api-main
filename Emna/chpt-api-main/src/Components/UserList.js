import React from "react";
import { Link } from "react-router-dom";

const UserList = ({users}) => {
  return (
    <div className="cards">
      <h1>List of users</h1>
      {users.map((el) => (<div key={el.id}>
                <div className="card">
          <img src="/userlogo.png" alt="" height="200px" width="200px" />
          <h5 className="card-title">{el.name}</h5>
          <p className="card-text">{el.username}</p>
          <p className="card-text">{el.email}</p>
          <Link to={`/details/:${el.id}`}>
            <button className="btn btn-primary">More details</button>
          </Link>
        </div></div>
      ))}
    </div>
      

  );
};

export default UserList;
