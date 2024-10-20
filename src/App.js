import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ChooseNBATeamPage from "./components/ChooseNBATeamPage";
import RosterPage from "./components/RosterPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/choose" element={<ChooseNBATeamPage />} />
        <Route path="/roster" element={<RosterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
