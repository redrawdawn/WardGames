import React from "react";
import { Button } from "reactstrap";

export const MyGamesFilter = ({gameFilters, setGameFilters}) => {

    const setMyGamesOnlyFilter = (tf) => { 
            if (gameFilters.myGamesOnly === tf) return

            let newFilters = { myGamesOnly: tf }
            setGameFilters(filters => ({
                ...filters,
                ...newFilters
            }))
    }



    return (<>
        <Button color="dark"
            //className={gameFilters.myGamesOnly ? "" : "selected"}
            onClick={() => setMyGamesOnlyFilter(false)}>All Game
        </Button>

        <Button color="dark"
            //className={gameFilters.myGamesOnly ? "selected" : ""} 
            onClick={() => setMyGamesOnlyFilter(true)}>My Games
        </Button>
    </>)
}


