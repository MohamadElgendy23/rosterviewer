import React from "react";

function AboutPage() {
  return (
    <div className="About">
      <div className="header">
        <img
          alt="about-logo"
          src="https://www.clipartbest.com/cliparts/9cz/pKb/9czpKbdbi.jpg"
          width={200}
          height={200}
        ></img>
        <p id="about-paragraph">
          This project utilizes react.js and live API calls to display an NBA
          player roster for each NBA team. <br />
          Created by: Mohamad Elgendy &#128540;
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
