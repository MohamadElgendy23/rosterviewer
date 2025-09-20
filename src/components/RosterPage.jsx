import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RosterPage.css";

const teamRosterAPI = "https://api.balldontlie.io/v1/players/?team_ids[]=";
function RosterPage() {
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

  async function favoritePlayer(player) {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:3000/favorites/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ item: player }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Failed to add favorite:", data.error);
        return;
      }

      console.log("Added favorite! Updated array:", data.favorites);
      return data.favorites;
    } catch (err) {
      console.error("Error adding favorite:", err);
    }
  }

  return (
    <div className="Roster">
      <header className="header">
        <div className="container">
          {roster &&
            roster.map((player, index) => {
              return (
                <div key={index} className="roster-item">
                  <i
                    className="fa-solid fa-star"
                    onClick={() => favoritePlayer(player)}
                  ></i>
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
