import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./NavBar.css";

function NavBar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };
  return (
    <div className="nav">
      {!isAuthenticated ? (
        <li>
          <Link to="/">Login</Link>
        </li>
      ) : (
        <li>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      )}
      {isAuthenticated && (
        <>
          <li>
            <Link to="/home">Home</Link>
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
        </>
      )}
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
}

export default NavBar;
