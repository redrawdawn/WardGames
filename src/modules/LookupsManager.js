const remoteURL = "http://localhost:8088"

export const GetMechanics = () => {
    return fetch(`${remoteURL}/mechanics`)
        .then(res => res.json())
}

export const GetCategories = () => {
    return fetch(`${remoteURL}/categories`)
        .then(res => res.json())
}