// import {useState, useEffect} from "react"
import BotCard from "./BotCard"


const BotCollection = ({bots}) => {


  return (
    <div className="bot-collection">
      {bots.map(bot => <BotCard key={bot.id} bot={bot} />)}
    </div>
  )
}

export default BotCollection;