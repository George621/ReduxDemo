import { GET_MY_LIST,CHANGE_VALUE, ADD_TODO, DEL_TODO, GET_LIST } from './actionTypes'
import axios from 'axios'

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

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5f088cf93d75a643f8c853b7/example/getlist').then(
      (res) => {
        let data = res.data.data.list
        let action = getListAction(data)
        dispatch(action)
      })
  }
}

export const getMyListAction =(list)=>{
  return {
    type:GET_MY_LIST,
    list
  }
}
