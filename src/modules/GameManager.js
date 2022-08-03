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
        debugger
        let currentUser = JSON.parse(localStorage.getItem("wardgames_user"))
        console.log("currentUser.id from GetMyGames: " + currentUser.id)
        return fetch(`${remoteURL}/myGames?userId=${currentUser.id}`)
            .then(res => res.json())
            .then(myGameIds => {
                for (let myGameId of myGameIds)
                {
                    query += "&id=" + myGameId.gameId
                }
                return fetch(query)
                    .then(res => res.json())
                })
    }
}
