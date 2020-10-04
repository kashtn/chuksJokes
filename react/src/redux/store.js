import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
//thunk
import thunkMiddleware from 'redux-thunk'
//saga
import createSagaMiddleware from 'redux-saga'
import {watcher} from '../sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer, 
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(watcher)

export default store