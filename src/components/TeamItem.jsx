import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const teamRosterAPI = "https://api.balldontlie.io/v1/players/?team_ids[]=";
function TeamItem({ id, name, abbreviation }) {
  const [teamRoster, setTeamRoster] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    const api = teamRosterAPI + id;
    axios
      .get(api, {
        headers: { Authorization: "40829abe-4376-4b1c-b7f2-f1b7b66988d8" },
      })
      .then((response) => {
        response.data
          .then((data) => {
            setTeamRoster(data);
          })
          .catch((error) => console.error(error));
      });
  }

  function displayTeamRoster() {
    getData();
    navigate("/roster", { replace: true, state: { roster: teamRoster } });
  }
  return (
    <div className="team-item" onClick={displayTeamRoster}>
      <p>Team Name: {name}</p>
      <p>Abbreviation: {abbreviation}</p>
    </div>
  );
}

export default TeamItem;
