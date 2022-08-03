import { Game } from "./Game"
import { GetGames } from "../modules/GameManager"
import { useEffect, useState } from "react"
import { MyGamesFilter } from "../filters/MyGamesFilter"
import { CategoriesFilter } from "../filters/CategoriesFilter"
import { MechanicsFilter } from "../filters/MechanicsFilter"
import { NumOfPlayersFilter } from "../filters/NumOfPlayersFIlter"
import { PlayTimeFilter } from "../filters/PlayTimeFilter"
import { SearchBar } from "../filters/SearchBar"
import { AddToMyGames, GetMyGames, RemoveFromMyGames } from "../modules/MyGamesManager"

export const GameList = () => {
    let [games, setGames] = useState([])
    let [gameFilters, setGameFilters] = useState({})
    let [myGameIds, setMyGameIds] = useState([])

    useEffect(() => {
        GetGames().then(gs => setGames(gs))
        // Get GameIds from MyGames result
        GetMyGames().then(mgi => setMyGameIds(mgi.map(x => x.gameId)))
    }, [])
    
    const setIsMine = (gameId, isMine) => {
        if (isMine) {
            AddToMyGames(gameId).then(() => 
                GetMyGames().then(mgi => setMyGameIds(mgi.map(x => x.gameId))))
        } else {
            RemoveFromMyGames(gameId, isMine).then(() => 
                GetMyGames().then(mgi => setMyGameIds(mgi.map(x => x.gameId)))
            )
        }
    }

    useEffect(() => {
        console.log("game filters changed")
        
        GetGames(gameFilters).then(gs => setGames(gs))
    }, [gameFilters])
    
    return (
            <>
                <SearchBar gameFilters={gameFilters} setGameFilters={setGameFilters}/>

                <MyGamesFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                <br />
                <div className="filters-div">
                    <NumOfPlayersFilter gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                    <PlayTimeFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                    <CategoriesFilter gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                    <MechanicsFilter gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                    <button onClick={() => setGameFilters({ myGamesOnly : gameFilters.myGamesOnly})}>Clear Filters</button>
                </div>
                {
                        games.map(game => 
                            { 
                                //return <div key={game.id} className="game-card">{game.handle}</div>
                                return <Game key={game.id} game={game} setIsMine={setIsMine} myGameIds={myGameIds} setMyGameIds={setMyGameIds}/>
                            })
                }
            </>
         )
}