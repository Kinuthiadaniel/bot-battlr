import React from "react"
import {Link} from "react-router-dom"


const BotCard = ({bot, handleSelectedBots})=>{

return(
      <div onClick = {()=>handleSelectedBots} >
        
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>Name : {bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p> catchphrase: {bot.catchphrase}</p>
            <Link >
            <button>View Details </button>
            </Link>
          
            
      </div>
)
}

export default BotCard;