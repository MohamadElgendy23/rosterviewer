import { axios } from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { TeamItem } from "";
const nbaTeamsAPI = "https://api.balldontlie.io/v1/teams";
function ChooseNBATeamPage() {
  const [NBATeams, setNBATeams] = useState([]);

  useEffect(() => {
    async function getData() {
      axios
        .get(nbaTeamsAPI)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            console.log(data);
            setNBATeams(data);
          }
        })
        .catch((error) => console.error(error));
    }
    getData();
  }, []);
  return (
    <div className="choose">
      {NBATeams.map((team, index) => {
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
  );
}

export default ChooseNBATeamPage;
