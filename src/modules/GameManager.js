const remoteURL = "http://localhost:8088"

export const GetGames = (filters) => {

    let query = `${remoteURL}/games?_start=0&_limit=20`
    if (!filters) 
        return fetch(query)
            .then(res => res.json())


    //Number Of Players Filter 
    if (filters.numOfPlayers)
        query += `&min_players_lte=${filters.numOfPlayers}&max_players_gte=${filters.numOfPlayers}`

    //Playtime Filter
    if (filters.playTimeFilter)
        query += `&min_playtime_lte=${filters.playTimeFilter}&max_playtime_gte=${filters.playTimeFilter}`
    
    //Mechanics Filter    
    if (filters.mechanicsFilter)
        query += `&q=${filters.mechanicsFilter}`

    //Categories Filter    
    if (filters.categoriesFilter)
        query += `&q=${filters.categoriesFilter}`

    //Search Filter
    if (filters.searchFilter)
        query += `&handle_like=${filters.searchFilter}`


    if (!filters.myGamesOnly)
    {
        return fetch(query)
            .then(res => res.json())
    }
    else
    {
        let currentUser = JSON.parse(localStorage.getItem("wardgames_user"))
        return fetch(`${remoteURL}/myGames?userId=${currentUser.id}`)
            .then(res => res.json())
            .then(myGameIds => {
                // If I have no games, return a promise that
                // resolves to an empty array (because the caller
                // is expecting a promise) 
                if (!myGameIds || myGameIds.length == 0)
                    return Promise.resolve([])

                for (let myGameId of myGameIds)
                {
                    query += "&id=" + myGameId.gameId
                }
                return fetch(query)
                    .then(res => res.json())
                })
    }
}
