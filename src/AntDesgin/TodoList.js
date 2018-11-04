import React, { Component } from 'react'
import { Input } from 'antd';
// import 'antd/dist/antd.css';

class TodoList extends React.Component {

    render() {
        return (
                    <div>
                        <Input placeholder='todo info'/>
                    </div>
            )
    }
} 

export default TodoList;