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
    case 'CHANGE_VALUE':
      return {...state, inputValue: action.value}
    case'ADD_TODO':
      let list = state.list.concat(state.inputValue)
      
      console.log(list,'----')
      return {...state, list:list}
    default:
      break;
  }
  return state
}