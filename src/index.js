import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxApp from './ReduxTest/ReduxApp';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './ReduxTest/index.reducer'
import TodoList from './AntDesgin/TodoList';
import Welcome from './Function/Welcome';


//创建store
const store = createStore(reducer);

// ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
            <ReduxApp/>
            <TodoList/>
        </div>
    </Provider>, 
    document.getElementById('root'));