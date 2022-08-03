import React from "react";

export const GameDetail = ({game, myGameIds, setIsMine }) => {
    const isMine = myGameIds.includes(game.id)
    const starIfMine = isMine ? "☑" : "☐" 

    return (
    <>

            <img src={game.image_url} width="80%"/>
        
            <br />
            
            <span onClick={() =>setIsMine(game.id, !isMine)}>{starIfMine}</span>
            <br />
            <p>Number of Players:  {!game.players ? "?" : game.players}</p>
            <p>Playtime: {game.playtime} minutes</p>

            {/* displays Learning complexity and Strategy complexity rounded to the nearest decimal  */}
            <p>Learning complexity: {game.average_learning_complexity ? game.average_learning_complexity.toFixed(1) : "?"} / 5</p>
            <p>Strategy complexity: {game.average_learning_complexity ? game.average_strategy_complexity.toFixed(1) : "?"} / 5</p>

            <br />

            <div dangerouslySetInnerHTML={{__html: game.description}}></div>
            
    </>
    )
}