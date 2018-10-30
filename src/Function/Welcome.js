import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return (
      // 此处注释的写法 
      <div className="shopping-list">
        {/* 此处 注释的写法 必须要{}包裹 */}
        <h1>欢迎使用测试页面 {props.name}</h1>
        <ul>
          <li>Hello World</li>
          <li>just test !!!!</li>
        </ul>
      </div>
    )
  }
  
  ReactDOM.render(
    <Welcome name="jack" />,
    document.getElementById('root')
  )

export default Welcome;