import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// 1 点击按钮 
// 2 触发PayDecrease()方法 
// 3 该方法派发相应action 
// 4 reducer根据action的type响应得到新的state 
// 5 通过{this.props.tiger}拿到新的state 渲染到页面
// 所有的action reducer store Provider connect等等都写在了一个页面

// class App extends Component {
//   render() {
//     const { PayIncrease, PayDecrease } = this.props;
//     return (
//         <div className="App">
//             <div className="App">
//                 <h2>当月工资为{this.props.tiger}</h2>
//                 <button onClick={PayIncrease}>升职加薪</button>
//                 <button onClick={PayDecrease}>迟到罚款</button>
//             </div>
//         </div>
//     );
// }
// }

// const tiger = 10000

// //这是action
// const increase = {
//     type: '涨工资'
// }
// const decrease = {
//     type: '扣工资'
// }
// //这是reducer
// const reducer = (state = tiger, action) => {
//     switch (action.type) {
//         case '涨工资':
//             return state += 100;
//         case '扣工资':
//             return state -= 100;
//         default:
//             return state;
//     }
// }

// //创建store
// const store = createStore(reducer);

// //需要渲染什么数据
// function mapStateToProps(state) {
//     return {
//         tiger: state
//     }
// }
// //需要触发什么行为
// function mapDispatchToProps(dispatch) {
//     return {
//         PayIncrease: () => dispatch({ type: '涨工资' }),
//         PayDecrease: () => dispatch({ type: '扣工资' })
//     }
// }

// //连接组件
// App = connect(mapStateToProps, mapDispatchToProps)(App)

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById('root')
// )


class ReduxApp extends Component {

  componentDidMount() {
    console.log(this.props)
  } 
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <h2>当月工资为{this.props.tiger}</h2>
        <button onClick={PayIncrease}>升职加薪</button>
        <button onClick={PayDecrease}>迟到罚款</button>
      </div>
    );
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' })
  }
}

//此处一定要注意： 导出的不是APP组件，而是connect后的APP组件
export default ReduxApp = connect(mapStateToProps, mapDispatchToProps)(ReduxApp)


