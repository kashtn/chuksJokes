import fetch from 'node-fetch'

export default async function joking () {

    const jokeResponse = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "d808595fe2msh4689c2dd453b78bp1f2122jsne6ee247af325",
        "accept": "application/json"
      }
    })

    const joke = await jokeResponse.json()
    return joke.value
}
