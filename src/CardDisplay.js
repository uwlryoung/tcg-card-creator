import { useEffect, useState } from "react";

const CardDisplay = () => {
  const [game, setGame] = useState("faeria");

  useEffect(() => {
    console.log(game)
  })

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
      </div>
    </>
  );
}
 
export default CardDisplay;