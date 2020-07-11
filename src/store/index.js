import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
// import mySagas from './sagas.js'

// const ADD_TODO = 'ADD_TODO'
// const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
// sagaMiddleware.run(mySagas)
export default store