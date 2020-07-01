import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // console.log(store.getState())
    this.storeChange = this.storeChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    store.subscribe(this.storeChange)
  }
  onChangeInput(e){
    const action = {
      type:'CHANGE_VALUE',
      value: e.target.value
    }
    store.dispatch(action)
  }
  addTodo(){
    const action = {
      type:'ADD_TODO',
      item: this.state.inputValue
    }
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }

  render() {
    let {inputValue,list} = this.state
    return (<div style={{margin: '10px'}}>
      <div>
        <Input
          placeholder={inputValue}
          onChange={(e)=>{this.onChangeInput(e)}}
          style={{ width: '250px',marginRight:'10px' }}
        />
        <Button onClick={()=>{this.addTodo()}} type='primary'>增加</Button>
        <div style={{margin:'10px',width:'300px'}}>
          <List 
            bordered 
            dataSource={list}
            renderItem={item =>(<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    </div>)
  }
}

export default TodoList;