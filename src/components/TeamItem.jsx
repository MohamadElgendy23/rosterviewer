import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TeamItem.css";

const teamRosterAPI = "https://api.balldontlie.io/v1/players/?team_ids[]=";
function TeamItem({ id, name, abbreviation }) {
  const navigate = useNavigate();

  async function getData() {
    const api = teamRosterAPI + id;
    const response = await axios.get(api, {
      headers: { Authorization: "40829abe-4376-4b1c-b7f2-f1b7b66988d8" },
    });
    return response.data;
  }

  async function displayTeamRoster() {
    const teamRoster = await getData();
    navigate("/roster", { replace: true });
  }
  return (
    <div className="team-item" onClick={displayTeamRoster}>
      <p>Team Name: {name}</p>
      <p>Abbreviation: {abbreviation}</p>
    </div>
  );
}

export default TeamItem;
