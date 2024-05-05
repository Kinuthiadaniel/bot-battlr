// YourBotArmy.js
import React from "react";

const MyBotArmy = ({ army, removeFromArmy }) => {

  return (
    <div className="container" >
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} >
          <img src={bot.avatar_url} alt="bot avatar" />
          <h3>Name: {bot.name}</h3>
          <button
            className="btn btn-danger m-2"

          >
            Discharge
          </button>
         
        </div>
      ))}
    </div>
  );
};

export default MyBotArmy;