import { CHANGE_VALUE, ADD_TODO, DEL_TODO , GET_LIST} from './actionTypes'

export const changeInputAction = (val) => ({
  type: CHANGE_VALUE,
  value: val
})

export const addTodoAction = () => ({
  type: ADD_TODO
})

export const delItemAction = (index) => ({
  type: DEL_TODO,
  index
})

export const getListAction = (list) => ({
  type: GET_LIST,
  list
})