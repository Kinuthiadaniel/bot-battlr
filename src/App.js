// App.js
import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';

import './App.css';

function App() {
  const [selectedBot, setSelectedBot] = useState([]);

  const addBotArmy = (bot) => {
    
    if (!selectedBot.some((bots) => bots.id === bot.id)) {
      setSelectedBot([...selectedBot, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    const updatedArmy = selectedBot.filter((bot) => bot.id !== botId);
    setSelectedBot(updatedArmy);
  };

  // const HandleAddToArmy = (bot) => {
  //   addBotArmy(bot);
  // }



  return (
    <div className="App">
      <h1 className='text-center my-5'>Bot Battalion</h1>

      <div className='container'>
        
             <MyBotArmy army={selectedBot} removeFromArmy={removeFromArmy} />
         
      </div>

      <div>
        <BotCollection addBotArmy={addBotArmy} />
      </div>
    </div>
  );
}

export default App;