import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function displayChooseTeamPage() {
    navigate(`/choose`, { replace: true });
  }

  return (
    <div className="Home">
      <header className="header">
        <h1>Roster Viewer</h1>
        <img
          alt="nba-icon"
          src="https://wallpaperaccess.com/full/1305374.jpg"
          width={100}
          height={100}
        ></img>
        <button id="choose-button" onClick={displayChooseTeamPage}>
          Choose NBA Team
        </button>
      </header>
    </div>
  );
}

export default HomePage;
