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
import { Container } from "reactstrap"

export const GameList = () => {
    let [games, setGames] = useState([])
    let [gameFilters, setGameFilters] = useState({})
    let [myGameIds, setMyGameIds] = useState([])

    useEffect(() => {
        //gets all the games and sets them to the game state 
        GetGames().then(gs => setGames(gs))
        //gets all 'myGames', extracts the gameIds and sets them to 'myGameIds' state 
        GetMyGames().then(mgi => setMyGameIds(mgi.map(x => x.gameId)))
    }, [])

    //adds or removes a game from 'myGames'
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
    
    //if there are no games this will return "No games found"
    let noGamesFoundDiv;

    if (games.length == 0) noGamesFoundDiv = <div>No games found</div>

    return (
            <>
            <Container>
                <div className="game-list-filters">
                    <div className="allgames-mygames">
                        <MyGamesFilter gameFilters={gameFilters} setGameFilters={setGameFilters} />
                    </div>

                    <br />

                    <SearchBar gameFilters={gameFilters} setGameFilters={setGameFilters}/>

                    <div className="filters-div">
                        <div className="filter">
                            <NumOfPlayersFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                        </div>
                        <div className="filter">
                            <PlayTimeFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters} />
                        </div>
                        <div className="filter">
                            <CategoriesFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                        </div>
                        <div className="filter">
                            <MechanicsFilter className="filter" gameFilters={gameFilters} setGameFilters={setGameFilters}/>
                        </div>
                        {/*V this is the 'clear filters' button 
                        and it is clearing all the flters but keeps 
                        the current state of the 'myGamesOnly'  filter*/}
                        <div className="filter">
                            <button onClick={() => setGameFilters({ myGamesOnly : gameFilters.myGamesOnly})}>Clear Filters</button>
                        </div>
                    </div>
            </div>

                {
                    games.map(game => 
                        { 
                            return <Game key={game.id} game={game} setIsMine={setIsMine} myGameIds={myGameIds} setMyGameIds={setMyGameIds}/>
                        })
                }

                {noGamesFoundDiv}
                </Container>
            </>
        )
}
