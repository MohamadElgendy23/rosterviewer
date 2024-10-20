import React from "react";
import { useLocation } from "react-router-dom";

function RosterPage() {
  const location = useLocation();

  return (
    <div className="Roster">
      <header className="header">
        {location.roster.map((player, index) => {
          return (
            <div key={index} id="roster-item">
              <h1>
                First Name: {player.first_name}, Last Name: {player.last_name}
              </h1>
              <h2>Position: {player.position}</h2>
              <h3>
                Height: {player.height}, Weight: {player.weight}
              </h3>
              <h4>Jersey #: {player.jersey_number}</h4>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default RosterPage;
