
import React, { useEffect, useState } from 'react';


const BotCollection = ({ addBotArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setBots(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const HandleAddToArmy = (bot) => {
    addBotArmy(bot);
  }
  function deleteBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((data) => {
        alert(`Bot with id:${data.id} deleted successfully!`)
        setBots(bots.filter(bot => {
          return bot.id !== bot;
        }))
      })
  }


  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id} className='card-container mx-auto'>

          <img src={bot.avatar_url} alt="bot avatar" />
          <h3>Name: {bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Bot class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button className='btn btn-success' onClick={() => HandleAddToArmy(bot)}>Enlist</button>
          <button className="btn btn-danger" onClick={()=>deleteBot(bot)}> X</button>
        
        </div>
      ))}
    </div>
  );
}

export default BotCollection;