import { CHANGE_VALUE, ADD_TODO, DEL_TODO } from './actionTypes'

export const changeInputAction = (val) => ({
  type: CHANGE_VALUE,
  value: val
})

export const addTodoAction = ()=>({
  type: ADD_TODO
})

export const delItemAction = (index)=>({
  type:DEL_TODO,
  index
})