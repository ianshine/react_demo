//该页面集成后没有用
import React from 'react';
import ReactDOM from 'react-dom';
import App from './ReduxApp';
import ReduxApp from './ReduxTest/ReduxApp';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './index.reducer'


// ReactDOM.render(<App />, document.getElementById('root'));


//创建store
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>, 
    document.getElementById('root'));

