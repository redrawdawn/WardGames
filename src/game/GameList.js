import { Game } from "./Game"
import { GetGames } from "../modules/GameManager"
import { useEffect, useState } from "react"
import { MyGamesFilter } from "../filters/MyGamesFilter"
import { CategoryFilter } from "../filters/CategoryFilter"
import { MechanicsFilter } from "../filters/MechanicsFilter"
import { NumOfpplayersFilter } from "../filters/NumOfPlayersFIlter"
import { PlayTimeFilter } from "../filters/PlayTimeFilter"

export const GameList = () => {
    let [games, setGames] = useState([])
    let [gameFilters, setGameFilters] = useState({})

    useEffect(() => {
        let games = GetGames().then(games => setGames(games))
    }, [])
    
    return (
            <>
                <MyGamesFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                <br />
                <div className="filters-div">
                    <NumOfpplayersFilter />
                    <PlayTimeFilter />
                    <CategoryFilter />
                    <MechanicsFilter />
                </div>
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