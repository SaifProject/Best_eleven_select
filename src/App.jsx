import "./App.css";
import { Suspense, use, useState } from "react";
import AvailablePlayer from "./components/AvailablePlayers/AvailablePlayer";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import NavBar from "./components/navbar/NavBar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playerPromis = fetchPlayers();
function App() {
  const [troggle, setTroggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000);
  const [purchasePlayer, setPurchasePlayer] = useState([]);

const removePlayer=(p) => {
  const filterData =purchasePlayer.filter(ply=>ply.name !== p.name)
  // console.log(filterData);
  setPurchasePlayer(filterData);
  setAvailableBalance(availableBalance + p.bidding_price)
}


  return (
    <>
      <NavBar availableBalance={availableBalance}> </NavBar>

      {/* availabele palyer part heading */}

      <div className="flex justify-between items-center  max-w-[1200px] mx-auto">
        <h1 className="font-bold text-2xl">
          {troggle === true
            ? "Available Player"
            : ` "Selected (${purchasePlayer.length}/6)"`}
        </h1>

        <div>
          <button
            onClick={() => setTroggle(true)}
            className={`px-4 py-3 border-1 border-r-0 border-gray-400 rounded-l-2xl ${troggle === true ? "bg-green-400" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setTroggle(false)}
            className={`px-4 py-3 border-1 border-l-0 border-gray-400 rounded-r-2xl ${troggle === false ? "bg-green-400" : ""}`}
          >
            Selected <span>{purchasePlayer.length}</span>
          </button>
        </div>
      </div>

      {troggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xs"></span>}
        >
          <AvailablePlayer
            purchasePlayer={purchasePlayer}
            setPurchasePlayer={setPurchasePlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromis={playerPromis}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayers purchasePlayer={purchasePlayer}
        removePlayer={removePlayer}></SelectedPlayers>
      )}
    </>
  );
}
export default App;
