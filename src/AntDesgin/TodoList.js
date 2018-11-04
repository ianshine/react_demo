import React, { Component } from 'react'
import { Input,Button,List } from 'antd';
import 'antd/dist/antd.css';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {/* 边框上方，左侧 边距 */}
                <div style={{marginTop:'10px', marginLeft:'10px'}}>
                    {/* input宽度，右侧 边距 */}
                    <Input placeholder='todo info' style={{width:'300px', marginRight:'10px'}}/>
                    <Button type="primary">提交</Button>
                </div>
                
                {/* marginTop边框上方，左侧 边距 ，bordered列表是否需要边框 */}
                <div> 
                    <List
                        style={{marginTop:'50px', marginLeft:'10px', width:'360px'}}
                        bordered 
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
            )
    }
} 

export default TodoList;