import { createStore } from 'redux'
import reducer from './reducer'
// const ADD_TODO = 'ADD_TODO'

const store = createStore(reducer)

export default store