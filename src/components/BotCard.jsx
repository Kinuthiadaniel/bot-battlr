const BotCard = ({bot})=>{
return(
      <div>
           
            <img src={bot.avatar_url} alt={bot.name} />
            <h1>Name : {bot.name}</h1>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p> catchphrase: {bot.catchphrase}</p>
      </div>
)
}

export default BotCard;