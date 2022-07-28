const remoteURL = "http://localhost:8088"

export const GetGames = () => {
    return fetch(`${remoteURL}/games`)
        .then(res => res.json())
}