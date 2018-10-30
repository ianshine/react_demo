import React, { Component } from 'react';

function Welcome(props) {
    return (
      // 此处注释的写法 
      <div className="shopping-list">
        {/* 此处 注释的写法 必须要{}包裹 */}
        <h1>Shopping List for {props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    )
  }
  
  ReactDOM.render(
    <Welcome name="jack" />,
    document.getElementById('root')
  )
