import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeFromArmy, dischargeBot }) {
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
                removeFromArmy={() => removeFromArmy(bot.id)}
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
