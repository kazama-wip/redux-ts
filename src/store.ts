import { createStore, combineReducers } from 'redux'
import { Reducer, State } from './reducer'
import thunk from 'redux-thunk'

export type AppState = {
  state: State
}

const store = createStore(
  combineReducers<AppState>({
    state: Reducer
  })
)

export default store