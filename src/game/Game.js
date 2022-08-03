import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import { GameDetail } from "./GameDetail"

export const Game = ({game, myGameIds, setIsMine, /* NEEDED? */ setMyGameIds}) => {
    const [modal, setModal] = useState(false)

    //handle click :::: details pop up
    const toggle = () => setModal(!modal)
    const isMine = myGameIds.includes(game.id)
    const starIfMine = isMine ? "☑" : "☐" 

    return (
        <>
            <div className="img-div" onClick={toggle}>
                <img src={game.thumb_url} width="100px"/>
            </div>
            <a href={"/games/" + game.id} className="game-card">{game.handle}</a>
            <span onClick={() =>setIsMine(game.id, !isMine)}>{starIfMine}</span>
            
            <br />


        
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{game.handle}</ModalHeader>
                <ModalBody>
                    <GameDetail game={game} myGameIds={myGameIds} setIsMine={setIsMine} setMyGameIds={setMyGameIds} />
                </ModalBody>
                <ModalFooter>
                    <div onClick={toggle}>Cancel</div>
                </ModalFooter>
            </Modal>
            


            <br /><br />
       </>
    )
}