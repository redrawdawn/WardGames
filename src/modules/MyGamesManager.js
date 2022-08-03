const remoteURL = "http://localhost:8088"

//function that posts a new 'mygame' to the database
export const AddToMyGames = (gameId) => {
    
    let currentUser = JSON.parse(localStorage.getItem("wardgames_user"))
    let newMyGame = {
        userId: currentUser.id,
        gameId: gameId
    }

    return fetch(`${remoteURL}/myGames`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMyGame)
    })
    .then(result => result.json())
}


export const RemoveFromMyGames = (gameId) => {
    let currentUser = JSON.parse(localStorage.getItem("wardgames_user"))
    //here we need 2 fetch calls because we need to get the 
    //selected game and delete it from 'mygames'
    return fetch(`${remoteURL}/myGames?userId=${currentUser.id}&gameId=${gameId}`)
        .then(result => result.json())
        .then(data => {
            return fetch(`${remoteURL}/myGames/${data[0].id}`, {
                method: "DELETE"
            })
            .then(result => result.json())
        } )
}

export const GetMyGames = () => {
    let currentUser = JSON.parse(localStorage.getItem("wardgames_user"))
    //gets all the 'mygames' of the current user
    return fetch(`${remoteURL}/myGames?userId=${currentUser.id}`)
    .then(result => result.json())
}

