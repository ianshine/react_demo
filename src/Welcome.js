import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return (
      // 此处注释的写法 
      <div className="shopping-list">
        {/* 此处 注释的写法 必须要{}包裹 */}
        <h1>hello {props.name}</h1>
        <ul>
          <li>world</li>
          <li>ian</li>
        </ul>
      </div>
    )
  }
  
  ReactDOM.render(
    <Welcome name="jack" />,
    document.getElementById('root')
  )

export default Welcome;