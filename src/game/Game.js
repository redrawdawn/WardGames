import { useState } from "react";
import { Modal, ModalBody } from "reactstrap"
import { GameDetail } from "./GameDetail"

export const Game = ({game}) => {
    const [showGameDetail, setShowGameDetail] = useState(false);
    //handle click :::: details pop up
    const toggle = () => setShowGameDetail(!showGameDetail)

    return (
        <>
            <div className="img-div" onClick={toggle}>
                <img src={game.thumb_url} width="100px"/>
            </div>
            <a href={"/games/" + game.id} className="game-card">{game.handle}</a>
            <br />
        
            <Modal isOpen={showGameDetail} toggle={toggle} modalTransition={{ timeout: 2000 }}>
                <ModalBody>
                    <GameDetail game={game}/> 
                </ModalBody>
            </Modal>
            
            <br /><br />
       </>
    )
}