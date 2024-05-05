import React, { useEffect, useState } from 'react';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => {
        return response.json();
      })
      .then((botData) => {
        setBots(botData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <div>
      <h2>Bot Collection</h2>
      <h3>Create your army!</h3>

      {bots.map((bot) => (
        <div key={bot.id} className='container'>
          <img src={bot.avatar_url} alt="bot avatar" />
          <h3>Name: {bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Bot class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
         

        </div>
      ))}
    </div>
  );
}

export default BotCollection;