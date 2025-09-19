import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/choose">Choose</Link>
      </li>
      <li>
        <Link to="/roster:teamID">Roster</Link>
      </li>
      <li>
        <Link to="/myTeam">My Team</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
}

export default NavBar;
