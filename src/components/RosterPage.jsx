import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "./RosterPage.css";

const teamRosterAPI = "https://api.balldontlie.io/v1/players/?team_ids[]=";
function RosterPage() {
  //const location = useLocation();
  //const teamRoster = location.state.roster.data;
  const [roster, setRoster] = useState([]);
  const { teamID } = useParams();

  useEffect(() => {
    async function getData() {
      const api = teamRosterAPI + teamID;
      const response = await axios.get(api, {
        headers: { Authorization: "40829abe-4376-4b1c-b7f2-f1b7b66988d8" },
      });
      const data = response.data.data;
      setRoster(data);
    }
    getData();
  }, []);

  // async function displayTeamRoster() {
  //   const teamRoster = await getData();
  //   //navigate("/roster", { replace: true, state: { roster: teamRoster } });
  // }
  return (
    <div className="Roster">
      <header className="header">
        <div className="container">
          {roster &&
            roster.map((player, index) => {
              return (
                <div key={index} class="roster-item">
                  <p>
                    First Name: {player.first_name}, Last Name:{" "}
                    {player.last_name}
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
