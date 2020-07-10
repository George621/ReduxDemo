import React from 'react';
import { Input, Button, List } from 'antd'

const TodoListUi = (props)=>{
  // 无状态函数纯展示ui
  const { inputValue, onChangeInput, addTodo, delItem, list } = props

  return (
    <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder={inputValue}
            value={inputValue}
            onChange={(e) => { onChangeInput(e) }}
            style={{ width: '250px', marginRight: '10px' }}
          />
          <Button onClick={() => { addTodo() }} type='primary'>增加</Button>
          <div style={{ margin: '10px', width: '300px' }}>
            <List
              bordered
              dataSource={list}
              renderItem={
                (item, index) => (<List.Item onClick={() => delItem(index)
                }
                >
                  {item}
                </List.Item>)}
            />
          </div>
        </div>
      </div>
  )
}
export default TodoListUi;