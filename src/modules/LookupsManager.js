const remoteURL = "http://localhost:8088"

//gets a list of all mechanics
export const GetMechanics = () => {
    return fetch(`${remoteURL}/mechanics`)
        .then(res => res.json())
}

//gets a list of all categories 
export const GetCategories = () => {
    return fetch(`${remoteURL}/categories`)
        .then(res => res.json())
}
