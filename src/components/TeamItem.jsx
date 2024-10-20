import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const teamRosterAPI = "https://api.balldontlie.io/v1/players/?team_ids[]=";
function TeamItem({ id, name, abbreviation }) {
  const [teamRoster, setTeamRoster] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const api = teamRosterAPI + id;
      axios.get(api).then((response) => {
        response
          .json()
          .then((data) => {
            if (data && data.length > 0) {
              console.log(data);
              setTeamRoster(data);
            }
          })
          .catch((error) => console.error(error));
      });
    }
    getData();
  }, []);
  function displayTeamRoster() {
    navigate("/roster", { replace: true, state: { roster: teamRoster } });
  }
  return (
    <div className="team-item" onClick={displayTeamRoster}>
      <h1>Player Name: {name}</h1>
      <h2>Abbreviation: {abbreviation}</h2>
    </div>
  );
}

export default TeamItem;
