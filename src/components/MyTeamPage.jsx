import React, { useState, useEffect } from "react";
import "./MyTeamPage.css";

function MyTeamPage() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    async function getFavorites() {
      const token = localStorage.getItem("token");
      if (!token) return [];

      try {
        const res = await fetch("http://localhost:3000/favorites", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          console.error("Failed to fetch favorites:", data.error);
          return [];
        }

        setFavorites(data.favorites);
      } catch (err) {
        console.error("Error fetching favorites:", err);
        return [];
      }
    }

    getFavorites();
  }, []);

  async function unfavoritePlayer(player) {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:3000/favorites/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // 👈 needed to send JSON
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ item: player }), // 👈 send item in body
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Failed to remove favorite:", data.error);
        return;
      }

      setFavorites(data.favorites);
    } catch (err) {
      console.error("Error removing favorite:", err);
    }
  }

  return (
    <div className="Team">
      <header className="header">
        <div className="favorites-container">
          {favorites.length
            ? favorites.map((favorite, index) => {
                return (
                  <div key={index} className="favorite-item">
                    <i
                      className="fa-solid fa-star"
                      onClick={() => unfavoritePlayer(favorite)}
                    ></i>
                    <p>
                      First Name: {favorite.first_name}, Last Name:{" "}
                      {favorite.last_name}
                    </p>
                    <p>Position: {favorite.position}</p>
                    <p>
                      Height: {favorite.height}, Weight: {favorite.weight}
                    </p>
                    <p>Jersey #: {favorite.jersey_number}</p>
                  </div>
                );
              })
            : "Empty my team, try favoriting some players."}
        </div>
      </header>
    </div>
  );
}

export default MyTeamPage;
