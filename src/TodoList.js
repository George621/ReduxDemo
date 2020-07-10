import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index'
import { changeInputAction, addTodoAction, delItemAction, getListAction } from './store/actionCreators'
import TodoListUi from './TodoListUi'
import axios from 'axios'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
    store.subscribe(this.storeChange)
  }
  onChangeInput(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  addTodo() {
    const action = addTodoAction()
    store.dispatch(action)
  }
  storeChange() {
    console.log(12121)
    this.setState(store.getState())
  }
  delItem(index) {
    const action = delItemAction(index)
    store.dispatch(action)
  }
  componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5f088cf93d75a643f8c853b7/example/getlist').then(
      (res)=>{
      let data = res.data.data.list
      let actions = getListAction(data)
      store.dispatch(actions)
    }
    )
  }
  render() {
    let { inputValue, list } = this.state
    return (
      <TodoListUi
        inputValue={inputValue}
        list={list}
        onChangeInput={this.onChangeInput}
        addTodo={this.addTodo}
        delItem={this.delItem}
      />
    )
  }
}

export default TodoList;