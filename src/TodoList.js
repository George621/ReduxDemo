import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'
import { CHANGE_VALUE, ADD_TODO, DEL_TODO } from './store/actionTypes'
import { changeInputAction, addTodoAction, delItemAction } from './store/actionCreators'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
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
  render() {
    let { inputValue, list } = this.state
    return (<div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder={inputValue}
          value={this.state.inputValue}
          onChange={(e) => { this.onChangeInput(e) }}
          style={{ width: '250px', marginRight: '10px' }}
        />
        <Button onClick={() => { this.addTodo() }} type='primary'>增加</Button>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={list}
            renderItem={
              (item, index) => (<List.Item onClick={() => this.delItem(index)}
              >
                {item}
              </List.Item>)}
          />
        </div>
      </div>
    </div>)
  }
}

export default TodoList;