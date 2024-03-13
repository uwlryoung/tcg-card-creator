import { useState } from "react";
import FaeriaCanvas from "../canvas/FaeriaCanvas";

const Faeria = () => {
  const [title, setTitle] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState(null);
  const [rarity, setRarity] = useState("");
  const [mythic, setMythic] = useState("");
  const [cardText, setCardText] = useState("");

  return (
    <>
      <h2>This is Faeria's Page!</h2>
      <div className="card-page">
        <div className="card-display">
          <h2>See the card changes</h2>
          <FaeriaCanvas width="200" height="300" />
          <p>{title}</p>
          <p>{cardColor}</p>
          <p>{type}</p>
          <p>{cost}</p>
          <p>{rarity}</p>
          <p>{mythic}</p>
          <p>{cardText}</p>
        </div>
        <div className="card-form">
          <h2>Fill Out Information</h2>
          <form>
            <div className="form-item">
              <label>Card Title: </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-item">
              <label>Card Color: </label>
              <select value={cardColor} onChange={(e) => setCardColor(e.target.value)}>
                <option value=""></option>
                <option value="Neutral">Neutral</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
              </select>
            </div>

            <div className="form-item">
              <label>Card Type: </label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value=""></option>
                <option value="Creature">Creature</option>
                <option value="Event">Event</option>
                <option value="Structure">Structure</option>
                <option value="Treasure">Treasure</option>
              </select>
            </div>

            <div className="form-item">
              <label>Faeria Cost: </label>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>

            <div className="form-item">
              <label>Card Rarity: </label>
              <select
                value={rarity}
                onChange={(e) => setRarity(e.target.value)}
              >
                <option value=""></option>
                <option value="Common">Common</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value="Legendary">Legendary</option>
              </select>
            </div>

            <div className="form-item">
              <label>Mythic:</label>
              <input
                type="radio"
                id="mythicYes"
                name="mythic"
                value="yes"
                onChange={(e) => setMythic("yes")}
              />
              <label for="mythicYes">Yes</label>

              <input
                type="radio"
                id="mythicNo"
                name="mythic"
                value="no"
                onChange={(e) => setMythic("no")}
              />
              <label for="mythicNo">No</label>
            </div>
            
            <div className="form-item">
              <p>Card Text:</p>
              <textarea
                value={cardText}
                onChange={(e) => setCardText(e.target.value)}
              >

              </textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Faeria;
