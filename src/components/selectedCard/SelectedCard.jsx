import React from "react";

const SelectedCard = ({ player,removePlayer }) => {
  console.log(player);
  const handleRemove=() =>{
    removePlayer(player)
  }
  return (
    <div className="border-2 border-gray-300 mt-5  p-3 flex justify-between rounded-xl">
      <div className="flex item-center">
        <img src={player.image} alt="" className="h-[50px] w-[50px] rounded-xl" />
        <div className="ml-2">
          <h1>{player.name}</h1>
          <p className="text-xs">{player.bowling_type}</p>
        </div>
      </div>
      <div>
        <button onClick={handleRemove} className="border-2 border-gray-300 text-red-500 hover:text-red-700">
        <img src="https://i.ibb.co.com/r2WNWtgv/delet.png" alt="" className="p-3" />
      </button >
      </div>
    </div>
  );
};

export default SelectedCard;
