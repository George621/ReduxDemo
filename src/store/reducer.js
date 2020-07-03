import {CHANGE_VALUE, ADD_TODO, DEL_TODO} from './actions'

const initState = {
  inputValue:'write somthing',
  list:[
    '早八点开晨会分配今天代码任务',
    '早9点需求沟通会',
    '早10点开晨会分配今天代码任务',
  ]
}

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {...state, inputValue: action.value}
    case ADD_TODO:
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.push(state.inputValue)
      newState.inputValue=''
      return newState
    case DEL_TODO:
      let newOtherState = JSON.parse(JSON.stringify(state))
      newOtherState.list.splice(action.index, 1)
      return newOtherState
    default:
      break;
  }
  return state
}