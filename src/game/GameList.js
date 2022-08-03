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
import './gameList.css';

export const GameList = () => {
    let [games, setGames] = useState([])
    let [gameFilters, setGameFilters] = useState({})
    let [myGameIds, setMyGameIds] = useState([])

    useEffect(() => {
        GetGames().then(gs => setGames(gs))
        GetMyGames().then(mgi => setMyGameIds(mgi.map(x => x.gameId)))
    }, [])

    const setIsMine = (gameId, isMine) => {
        if (isMine) {
            AddToMyGames(gameId).then(() => {
                let newMyGameIds = [...myGameIds]
                newMyGameIds.push(gameId)
                setMyGameIds(newMyGameIds)
            })
        } else {
            RemoveFromMyGames(gameId, isMine).then(() => {
                let newMyGameIds = myGameIds.filter((value) => value !== gameId)
                setMyGameIds(newMyGameIds)
            })
        }
    }

    useEffect(() => {
        GetGames(gameFilters).then(gs => setGames(gs))
    }, [gameFilters, myGameIds])
    
    if (games.length == 0) {
        return <>
            <div className="allgames-mygames">
                        <MyGamesFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                    </div>
                    <SearchBar gameFilters={gameFilters} setGameFilters={setGameFilters}/>

                    <br />
                    <div className="filters-div">
                        <NumOfPlayersFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                        <PlayTimeFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters} />
                        <CategoriesFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                        <MechanicsFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                        <button onClick={() => setGameFilters({ myGamesOnly : gameFilters.myGamesOnly})}>Clear Filters</button>
                    </div>
            <div>No games found</div>
        </>
    } 

    return (
            <>
                <div className="allgames-mygames">
                    <MyGamesFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                </div>
                <SearchBar gameFilters={gameFilters} setGameFilters={setGameFilters}/>

                <br />
                <div className="filters-div">
                    <NumOfPlayersFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                    <PlayTimeFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters} />
                    <CategoriesFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                    <MechanicsFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
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
