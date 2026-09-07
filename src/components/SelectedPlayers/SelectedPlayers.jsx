  import SelectedCard from "../selectedCard/selectedCard";

  const SelectedPlayers = ({ purchasePlayer,removePlayer }) => {
    console.log(purchasePlayer);
    return (
      <div className="max-w-[1200px] mx-auto">
      {
      purchasePlayer.map(player => (<SelectedCard
        key={player.id}
        player={player}
        removePlayer={removePlayer}
        > 
         </SelectedCard>
         ))
      }
     
      </div>
    );
  };

  export default SelectedPlayers;
