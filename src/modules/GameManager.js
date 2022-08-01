const remoteURL = "http://localhost:8088"

export const GetGames = (filters) => {

    let query = `${remoteURL}/games?_start=0&_limit=20`

    if (!filters) 
        return fetch(query)
            .then(res => res.json())


            
    if (filters.numOfPlayers)
        query += `&min_players_lte=${filters.numOfPlayers}&max_players_gte=${filters.numOfPlayers}`

    if (filters.playTimeFilter)
        query += `&min_playtime_lte=${filters.playTimeFilter}&max_playtime_gte=${filters.playTimeFilter}`
    
        // TODO: Add other filters here

    if (!filters.myGamesOnly)
    {
        return fetch(query)
            .then(res => res.json())
    }
    else
    {
        let currentUser = { id : 3 } // TODO: Get this from session storage
        return fetch(`${remoteURL}/myGames?userId=${currentUser.id}`)
            .then(res => res.json())
            .then(myGameIds => {
                for (let myGameId of myGameIds)
                {
                    query += "&id=" + myGameId.gameId
                }
                return fetch(query)
                    .then(res => res.json())
                    //.then(games => games)
                })
    }
}
