import { useParams } from "react-router-dom";

export const GameDetail = (props) => {
    //let {id} = useParams()

    return (
    <>
    
    <img src={props.game.thumb_url} width="100px"/>
            
        hello {props.game.id}<br />
        {props.game.thumb_url}
    </>
    )
}