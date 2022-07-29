import { Button } from "bootstrap";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import { GameDetail } from "./GameDetail"

export const Game = ({game}) => {
    const [modal, setModal] = useState(false);
    //handle click :::: details pop up
    const toggle = () => setModal(!modal)

    return (
        <>
            <div className="img-div" onClick={toggle}>
                <img src={game.thumb_url} width="100px"/>
            </div>
            <a href={"/games/" + game.id} className="game-card">{game.handle}</a>
            <br />


        
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{game.handle}</ModalHeader>
                <ModalBody>
                    <GameDetail game={game}/>
                </ModalBody>
                <ModalFooter>
                    <div onClick={toggle}>Cancel</div>
                </ModalFooter>
            </Modal>
            


            <br /><br />
       </>
    )
}