import { Collapse, Button } from "reactstrap";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToggleMyGamesButton } from "./ToggleMyGamesButton";
import { AddToMyGames, GetMyGameIds } from '../modules/MyGamesManager';


export const GameDetail = ({game, myGameIds, setIsMine, setMyGameIds}) => {
    //let {id} = useParams()
    const [showMore, setShowMore] = useState(false);
    const isMine = myGameIds.includes(game.id)
    const starIfMine = isMine ? "☑" : "☐" 

    return (
    <>

            <img src={game.image_url} width="100px"/>
        
            <br />
            {/* <ToggleMyGamesButton game={game}/> */}
            {/* <Button onClick={() => addMyGame(gameId)}>add to my games</Button> */}
            <span onClick={() =>setIsMine(game.id, !isMine)}>{starIfMine}</span>
            <Collapse isOpen={!showMore} dangerouslySetInnerHTML={{__html: game.description_preview}}></Collapse>
            <Collapse isOpen={showMore}>
                <div id="description" dangerouslySetInnerHTML={{__html: game.description}}></div>
            </Collapse>
            <button className="btn" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </button>
            <br />
            <br />
            <p>Number of Players:  {!game.players ? "?" : game.players}</p>
            <p>Playtime: {game.playtime} minutes</p>
            <p>Learning complexity: {Math.round(game.average_learning_complexity)}/5</p>
            <p>Strategy complexity: {Math.round(game.average_strategy_complexity)}/5</p>
    </>
    )
}