import { Game } from "./Game"
import { GetGames } from "../modules/GameManager"
import { useEffect, useState } from "react"
import { MyGamesFilter } from "./MyGamesFilter"

export const GameList = () => {
    let [games, setGames] = useState([])
    let [gameFilters, setGameFilters] = useState({})

    useEffect(() => {
        let games = GetGames().then(games => setGames(games))
    }, [])
    
    return (
            <>
                <MyGamesFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                {
                        games.map(game => 
                            { 
                                //return <div key={game.id} className="game-card">{game.handle}</div>
                                return <Game key={game.id} game={game} />
                            })
                }
            </>
         )
}