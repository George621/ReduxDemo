import { CHANGE_VALUE, ADD_TODO, DEL_TODO, GET_LIST } from './actionTypes'

const initState = {
  inputValue: 'write somthing',
  list: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, inputValue: action.value }
    case ADD_TODO:
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.push(state.inputValue)
      newState.inputValue = ''
      return newState
    case DEL_TODO:
      let newOtherState = JSON.parse(JSON.stringify(state))
      newOtherState.list.splice(action.index, 1)
      return newOtherState
    case GET_LIST:
      let listState = JSON.parse(JSON.stringify(state))
      listState.list = [...action.list]
      return listState
    default:
      break;
  }
  return state
}