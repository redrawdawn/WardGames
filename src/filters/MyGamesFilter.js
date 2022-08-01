

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
        <div 
            //className={gameFilters.myGamesOnly ? "" : "selected"}
            onClick={() => setMyGamesOnlyFilter(false)}>All Game
        </div>
        <div 
            //className={gameFilters.myGamesOnly ? "selected" : ""} 
            onClick={() => setMyGamesOnlyFilter(true)}>My Games
        </div>
    </>)
}


