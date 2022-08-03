import React from 'react';
import { Button } from 'reactstrap';
import { AddToMyGames } from '../modules/MyGamesManager';


export const ToggleMyGamesButton = ({game, isMine, setIsMine}) => {
    let gameId = game.id

    const addMyGame = (gameId) => {
        AddToMyGames(gameId)
    }

    return <Button onClick={() => addMyGame(gameId)}>add to my games</Button>
}
