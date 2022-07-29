import { Collapse } from "reactstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const GameDetail = (props) => {
    //let {id} = useParams()
    const [showMore, setShowMore] = useState(false);
    
    props.game.description_preview = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."

    return (
    <>

            <img src={props.game.image_url} width="100px"/>
        
            <br />

            <Collapse isOpen={!showMore} dangerouslySetInnerHTML={{__html: props.game.description_preview}}></Collapse>
            <Collapse isOpen={showMore}>
                <div id="description" dangerouslySetInnerHTML={{__html: props.game.description}}></div>
            </Collapse>
            <button className="btn" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </button>
            <br />
            <br />
            <p>Number of Players: {props.game.players}</p>
            <p>Playtime: {props.game.playtime} minutes</p>
            <p>Learning complexity: {Math.round(props.game.average_learning_complexity)}/5</p>
            <p>Strategy complexity: {Math.round(props.game.average_strategy_complexity)}/5</p>
    </>
    )
}