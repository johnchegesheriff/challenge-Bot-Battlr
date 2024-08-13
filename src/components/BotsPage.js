import React, {useState, useEffect}from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch()
    .then(response =>response.json())
    .then(data => setBots(data))
    .catch(error => console.error("Error fetching bots:", error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`${bot.id}`, {method: "DELETE"})
    .then(() => {
      setArmy(army.filter(b => b.id !== bot.id));
      setBots(bots.filter(b => b.id !== bot.id));
    })
    .catch(error => console.errors("error discgarging bot", error));
  };

  return (
    <div>
      <YourBotArmy bots={army} removeFromArmy={removeFromArmy}/>
      <BotCollection bots={bots} addToArmy={addToArmy}/>
    </div>
  )
}

export default BotsPage;
