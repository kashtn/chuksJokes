import { START, GETJOKE } from './actionTypes'

export function startGetting() {
  return {
    type: START
  }
}

export function setJoke(joke) {
  // setTimeout(() => {
    return {
      type: GETJOKE,
      payload: joke
    }
  // })
}

export function getJoke() {
  console.log('getjoke');
  return async function (dispatch) {
    const jokeResponse = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "d808595fe2msh4689c2dd453b78bp1f2122jsne6ee247af325",
        "accept": "application/json"
      }
    })
    const joke = await jokeResponse.json()
    setTimeout(() => {
      dispatch(setJoke(joke.value));
    }, 1000)
  }
}