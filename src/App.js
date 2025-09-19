import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import HomePage from "./components/HomePage";
import ChooseNBATeamPage from "./components/ChooseNBATeamPage";
import RosterPage from "./components/RosterPage";
import MyTeamPage from "./components/MyTeamPage";
import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/choose" element={<ChooseNBATeamPage />} />
        <Route path="/roster/:teamID" element={<RosterPage />} />
        <Route path="/myTeam" element={<MyTeamPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
