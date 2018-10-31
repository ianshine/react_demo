import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

//第一步
import {Provider} from 'react-redux';//引入react-redux
import  store from './store';

//作用：把store提供给<Provider></Provider>所有的组件实现store共享
const AppTest=(
    <Provider store={store}>
        <TodoList/>
        {/*这里面的组件都有能力获取store里的数据*/}
        {/*<A></A>*/}
        {/*<B></B>*/}
    </Provider>
);
//
// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(App, document.getElementById('root'));
export default AppTest;