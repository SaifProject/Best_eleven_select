import "./App.css";
import { Suspense } from "react";
import AvailablePlayer from "./components/AvailablePlayers/AvailablePlayer";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import NavBar from "./components/navbar/NavBar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromis = fetchPlayers();
  return (
    <>
      <NavBar> </NavBar>

      {/* availabele palyer part heading */}

      
      <Suspense
        fallback={<span className="loading loading-dots loading-xs"></span>}
      >
        <AvailablePlayer playerPromis={playerPromis}></AvailablePlayer>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
