import React, {useState, useEfect}from "react";

function BotCollection({bots, addToArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
      {bots.map(bot => (
          <div
            key={bot.id}
            className="column"
            onClick={() => addToArmy(bot)}
          >
            <div className="ui card">
              <div className="image">
                <img src={bot.image} alt={bot.name} />
              </div>
              <div className="content">
                <div className="header">{bot.name}</div>
                <div className="meta">{bot.type}</div>
                <div className="description">{bot.description}</div>
              </div>
            </div>
          </div>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
