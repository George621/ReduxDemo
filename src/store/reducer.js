import { CHANGE_VALUE, ADD_TODO, DEL_TODO, GET_LIST, PLUS_COUNT } from './actionTypes'

const initState = {
  inputValue: 'write somthing',
  count: 0,
  list: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      // 改变input
      return { ...state, inputValue: action.value }
    case ADD_TODO:
      // 添加 list
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.push(state.inputValue)
      newState.inputValue = ''
      return newState
    case DEL_TODO:
      // 删除 list
      let newOtherState = JSON.parse(JSON.stringify(state))
      newOtherState.list.splice(action.index, 1)
      return newOtherState
    case GET_LIST:
      // 接口获得list
      let listState = JSON.parse(JSON.stringify(state))
      listState.list = [...action.list]
      return listState

    case PLUS_COUNT:
      let countState = JSON.parse(JSON.stringify(state))
      countState.count=  countState.count + 1
      return countState

    default:
      break;
  }
  return state
}