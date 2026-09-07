import { use } from "react";
import PlayerCard from "../playerCard/PlayerCard";
import userImg from "../../assets/user 1.png";
import flagImg from "../../assets/flag.png";
const AvailablePlayers = ({ playerPromis,setAvailableBalance,availableBalance,purchasePlayer,setPurchasePlayer}) => {
  const playerData = use(playerPromis);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">    
    {
      playerData.map(player => <PlayerCard 
        availableBalance={availableBalance}
        setAvailableBalance={setAvailableBalance}
        purchasePlayer={purchasePlayer}
        setPurchasePlayer={setPurchasePlayer}
        player={player}>
        </PlayerCard>  
      )}
    </div>
  );
};

export default AvailablePlayers;
