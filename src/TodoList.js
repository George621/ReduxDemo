import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index'
// getListAction getMyListAction
import { getTodoList, changeInputAction,plusCountAction, addTodoAction, delItemAction } from './store/actionCreators'
import TodoListUi from './TodoListUi'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.plusCount = this.plusCount.bind(this)
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
  plusCount() {
    const action = plusCountAction()
    store.dispatch(action)
  }
  componentDidMount() {
    // thunk 方式
    let action = getTodoList()
    store.dispatch(action)
    // saga 方式
    // const action = getMyListAction()
    // store.dispatch(action)
  }
  render() {
    let { inputValue, list, count } = this.state
    return (
      <TodoListUi
        inputValue={inputValue}
        list={list}
        count={count}
        onChangeInput={this.onChangeInput}
        addTodo={this.addTodo}
        delItem={this.delItem}
        plusCount={this.plusCount}
      />
    )
  }
}

export default TodoList;