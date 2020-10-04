import { put, takeEvery, call } from 'redux-saga/effects'
import { setJoke } from '../redux/actions'
import { START } from '../redux/actionTypes'

export function* watcher() {
  yield takeEvery(START, worker)
}

export function* worker() {
  const joke = yield call(() => {
    return fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "d808595fe2msh4689c2dd453b78bp1f2122jsne6ee247af325",
        "accept": "application/json"
      }
    })
      .then(response => response.json())
  })
  console.log('Saga in da House!!');
  yield put(setJoke(joke.value))
}