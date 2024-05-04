import {useState, useEffect} from "react"
import BotCollection from "./components/BotCollection"
import MyBotArmy from "./components/MyBotArmy"
const App =()=>{
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
   .then(resp => resp.json())
   .then(data => setBots(data))
  }, [])
  return (
    <div className="">
      <BotCollection bots = {bots}/>
      {/* <MyBotArmy bots = {bots}/> */}
    </div>
  );
}

export default App;
