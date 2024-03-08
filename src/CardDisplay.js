import { useEffect, useState } from "react";
import Faeria from "./games/Faeria";
import Scrolls from "./games/Scrolls";
import Roguebook from "./games/Roguebook";
import SlayTheSpire from "./games/SlayTheSpire";

const CardDisplay = () => {
  const [game, setGame] = useState("faeria");

  // useEffect was used to check to make sure state was working.
  // useEffect(() => {
  //   console.log(game)
  // })

  return (
    <>
      <div className="card-display">

      </div>
      <div className="card-form">
        <form>
          <select value={game} onChange={(e) => setGame(e.target.value)}>
            <option value="faeria">Faeria</option>
            <option value="roguebook">Roguebook</option>
            <option value="scrolls">Scrolls</option>
            <option value="slay the spire">Slay the Spire</option>
          </select>
        </form>
        <div>
          {game === "faeria" && <Faeria />}
          {game === "roguebook" && <Roguebook />}
          {game === "scrolls" && <Scrolls />}
          {game === "slay the spire" && <SlayTheSpire />}
        </div>
      </div>
    </>
  );
}
 
export default CardDisplay;