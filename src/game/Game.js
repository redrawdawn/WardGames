import { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Row, Col } from "reactstrap"
import { GameDetail } from "./GameDetail"
import './game.css';

export const Game = ({game, myGameIds, setIsMine }) => {
    const [modal, setModal] = useState(false)

    //handle click :::: details pop up
    const toggle = () => setModal(!modal)
    const isMine = myGameIds.includes(game.id)
    const starIfMine = isMine ? "☑" : "☐" 

    return (
        <>
            <Row className="xgame-div" >
                <Col xs="3" lg="2" className="ximg-div" onClick={toggle}>
                    <img src={game.thumb_url} width="100%"/>
                </Col>
                <Col xs="7" className="game-name">{game.name}</Col>
                <Col xs="1" onClick={() =>setIsMine(game.id, !isMine)}>{starIfMine}</Col>
            </Row>
            <br />


            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{game.name}</ModalHeader>
                <ModalBody>
                    <GameDetail game={game} myGameIds={myGameIds} setIsMine={setIsMine} />
                </ModalBody>
                <ModalFooter>
                    <div onClick={toggle}>Cancel</div>
                </ModalFooter>
            </Modal>
            


            <br /><br />
       </>
    )
}