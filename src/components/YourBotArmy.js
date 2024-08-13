import React, {useState}from "react";
import BotCard from "./BotCard";

function YourBotArmy() {
  const [bots, setBots] = useState([]);

  const removeFromArmy = (botId) => {
    setBots(bots.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    setBots(bots.filter(bot => bot.id !== botId));
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.length === 0 ? (
            <div className="ui column">
            <h3>Your Bot Army is empty</h3>
          </div>
        ) : (
          bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              addToArmy={() => removeFromArmy(bot.id)}
              dischargeBot={() => dischargeBot(bot.id)} 
            />
          ))
        )}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
