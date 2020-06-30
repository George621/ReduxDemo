import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const data=[
  '早八点开晨会分配今天代码任务',
  '早9点需求沟通会',
  '早10点开晨会分配今天代码任务',
]
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (<div style={{margin: '10px'}}>
      <div>
        <Input
          placeholder='write something'
          style={{ width: '250px',marginRight:'10px' }}
        />
        <Button type='primary'>增加</Button>
        <div style={{margin:'10px',width:'300px'}}>
          <List 
            bordered 
            dataSource={data}
            renderItem={item =>(<List.Item>item</List.Item>)}
          />
        </div>
      </div>
    </div>)
  }
}

export default TodoList;