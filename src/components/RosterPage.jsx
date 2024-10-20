import React from "react";
import { useLocation } from "react-router-dom";
import "./RosterPage.css";

function RosterPage() {
  const location = useLocation();
  const teamRoster = location.state.roster.data;
  return (
    <div className="Roster">
      <header className="header">
        <div className="container">
          {teamRoster.map((player, index) => {
            return (
              <div key={index} class="roster-item">
                <p>
                  First Name: {player.first_name}, Last Name: {player.last_name}
                </p>
                <p>Position: {player.position}</p>
                <p>
                  Height: {player.height}, Weight: {player.weight}
                </p>
                <p>Jersey #: {player.jersey_number}</p>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default RosterPage;
