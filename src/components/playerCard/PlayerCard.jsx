import React, { useState } from "react";
import userImg from "../../assets/user 1.png";
import flagImg from "../../assets/flag.png";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasePlayer,
  setPurchasePlayer,
}) => {
  const [IsSelected, steIsSelected] = useState(false);
  const handledSelected = (playerData) => {
      console.log("CLICKED:", playerData);
     console.log("Selected player:", playerData.name);
    console.log("Selected player ID:", playerData.id);
    console.log(playerData);
    const playerPrice = playerData.bidding_price;

    if (playerPrice > availableBalance) {
      alert("Not enough Balance");
      return;
    }
    steIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasePlayer([...purchasePlayer, playerData]);
  };

  return (
    <div className="card bg-base-100 shadow-s -4">
      <figure>
        <img src={player.image} alt=""
          className="w-full h-[300px] object-cover object-top"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.name}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
          <div className="flex items-center ">
            <img className="w-[20 px] h-[20px]" src={flagImg} alt="" />
            <span className="ml-2"> {player.country}</span>
          </div>
          <button className="btnundde">{player.role}</button>
        </div>

        <div className="flex justify-between ">
          <span> Rating</span>
          <span> {player.rating} </span>
        </div>
        <div className="flex justify-between font-bold">
          <span className="font-bold">{player.batting_type}</span>
          <span> {player.bowling_type} </span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center ">
          <p> Price : {player.bidding_price}</p>
          <button
            disabled={IsSelected}
            onClick={() => handledSelected(player)}
            className="btn"
          >
            {IsSelected ? "Selected" : "Choose player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
