import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ChooseNBATeamPage from "./components/ChooseNBATeamPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="choose" element={<ChooseNBATeamPage />} />
          <Route path="roster" element={<RosterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
