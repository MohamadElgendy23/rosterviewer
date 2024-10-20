import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import TeamItem from "./TeamItem.jsx";
import "./ChooseNBATeamPage.css";
const nbaTeamsAPI = "https://api.balldontlie.io/v1/teams";
function ChooseNBATeamPage() {
  const [NBATeams, setNBATeams] = useState([]);

  useEffect(() => {
    async function getData() {
      axios
        .get(nbaTeamsAPI, {
          headers: { Authorization: "40829abe-4376-4b1c-b7f2-f1b7b66988d8" },
        })
        .then((response) => response.data)
        .then((data) => {
          setNBATeams(data.data);
        })
        .catch((error) => console.error(error));
    }
    getData();
  }, []);
  return (
    <div className="Choose">
      <header className="header">
        <div className="container">
          {NBATeams &&
            NBATeams.map((team, index) => {
              return (
                <TeamItem
                  key={index}
                  id={team.id}
                  name={team.full_name}
                  abbreviation={team.abbreviation}
                ></TeamItem>
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default ChooseNBATeamPage;
