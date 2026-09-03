import { use } from "react";
import userImg from "../../assets/user 1.png";
import flagImg from "../../assets/flag.png";
const AvailablePlayers = ({ playerPromis }) => {
  const playerData = use(playerPromis);

  console.log(playerData);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {
      playerData.map(player =>   <div className="card bg-base-100 shadow-s -4">
        <figure>
          <img
            src={player.img}
            alt="Shoes"
          className="w-full ho[300 px] object-cover"
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
            <p> Price : {player.bindding_price}</p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>)
    }
    </div>
  );
};

export default AvailablePlayers;
