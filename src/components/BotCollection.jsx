import { useState, useEffect } from "react"
import { displayBots } from "../utilities";

function BotColletion() {
  const [bots, setBots] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(botData => setBots(botData))
  }, [])
  const width = 200

  const toDisplay = bots.map((bot, index) => (
    <div className="container ">
      <div className="row ">

        <div className="card col-md-8  border border-primary p-2 mx-auto" key={index + 1}>
          <img src={bot.avatar_url} alt={bot.name} styles={{ width }} />
          <h3> {bot.name}</h3>
          {bot.catchphrase}
          {bot.health}
          {bot.damage}
          {bot.armor}
          <button onClick={() => displayBots(bot)}>Add to army</button>

        </div>
      </div>


    </div>

  )


  )

  return (
    <div className="all-bots">
      <h1>Bot Collection</h1>

{toDisplay}

    </div>
  )
}

export default BotColletion;