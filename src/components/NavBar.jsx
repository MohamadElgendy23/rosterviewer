import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth } from "../utils/auth";
import "./NavBar.css";

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function verify() {
      const auth = await checkAuth();
      setIsAuthenticated(auth);
    }
    verify();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };
  return (
    <div className="nav">
      {!isAuthenticated ? (
        <li>
          <Link to="/user">Login</Link>
        </li>
      ) : (
        <li>
          <button onClick={handleLogout}>Logout</button>
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
