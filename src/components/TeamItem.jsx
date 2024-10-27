import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TeamItem.css";

function TeamItem({ id, name, abbreviation }) {
  const navigate = useNavigate();

  return (
    <div className="team-item" onClick={() => navigate(`/roster/${id}`)}>
      <p>Team Name: {name}</p>
      <p>Abbreviation: {abbreviation}</p>
    </div>
  );
}

export default TeamItem;
