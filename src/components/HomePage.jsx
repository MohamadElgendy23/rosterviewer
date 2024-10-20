import React from "react";
import { replace, useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  function displayChooseTeamPage() {
    navigate(`/choose`, { replace: true });
  }

  return (
    <div className="Home">
      <header className="header">
        <h1>Roster Viewer Application</h1>
        <img
          alt="nba-icon"
          src="https://wallpaperaccess.com/full/1305374.jpg"
          width={350}
          height={250}
        ></img>
        <button id="choose-button" onClick={displayChooseTeamPage}>
          Choose NBA Team
        </button>
        <button
          id="about-button"
          onClick={() => navigate("/about", { replace: true })}
        >
          About
        </button>
      </header>
    </div>
  );
}

export default HomePage;
