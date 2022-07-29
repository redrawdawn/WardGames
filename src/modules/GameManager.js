const remoteURL = "http://localhost:8088"

export const GetGames = () => {
    return fetch(`${remoteURL}/games?_start=1&_limit=20`)
        .then(res => res.json())
}