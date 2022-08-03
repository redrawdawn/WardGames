import React from "react";
import './gameDetail.css';

export const GameDetail = ({game, myGameIds, setIsMine, setMyGameIds}) => {
//const [showMore, setShowMore] = useState(false);
    const isMine = myGameIds.includes(game.id)
    const starIfMine = isMine ? "☑" : "☐" 

    return (
    <>

            <img src={game.image_url} width="80%"/>
        
            <br />
            
            <span onClick={() =>setIsMine(game.id, !isMine)}>{starIfMine}</span>

            <div dangerouslySetInnerHTML={{__html: game.description}}></div>

            {/* <Collapse isOpen={!showMore} dangerouslySetInnerHTML={{__html: game.description_preview}}></Collapse>
            <Collapse isOpen={showMore}>
                <div id="description" dangerouslySetInnerHTML={{__html: game.description}}></div>
            </Collapse>
            <button className="btn" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </button> */}
            <br />
            <br />
            <p>Number of Players:  {!game.players ? "?" : game.players}</p>
            <p>Playtime: {game.playtime} minutes</p>
            <p>Learning complexity: {Math.round(game.average_learning_complexity)}/5</p>
            <p>Strategy complexity: {Math.round(game.average_strategy_complexity)}/5</p>
    </>
    )
}