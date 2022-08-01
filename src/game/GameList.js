import { Game } from "./Game"
import { GetGames } from "../modules/GameManager"
import { useEffect, useState } from "react"
import { MyGamesFilter } from "../filters/MyGamesFilter"
import { CategoriesFilter } from "../filters/CategoriesFilter"
import { MechanicsFilter } from "../filters/MechanicsFilter"
import { NumOfPlayersFilter } from "../filters/NumOfPlayersFIlter"
import { PlayTimeFilter } from "../filters/PlayTimeFilter"

export const GameList = () => {
    let [games, setGames] = useState([])
    let [gameFilters, setGameFilters] = useState({})

    useEffect(() => {
        GetGames().then(gs => setGames(gs))
    }, [])
    
    useEffect(() => {
        console.log("game filters changed")
        GetGames(gameFilters).then(gs => setGames(gs))
    }, [gameFilters])
    
    return (
            <>
                <MyGamesFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                <br />
                <div className="filters-div">
                    <NumOfPlayersFilter gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                    <PlayTimeFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                    <CategoriesFilter />
                    <MechanicsFilter />
                    <button onClick={() => setGameFilters({})}>Clear Filters</button>
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