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
  return (
    <div className="Team">
      <header className="header">
        <div className="favorites-container">
          {favorites.map((favorite) => {})}
        </div>
      </header>
    </div>
  );
}

export default MyTeamPage;
