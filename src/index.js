import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {Provider} from 'react-redux'
import configureStore from './components/store/configureStore'
import {startSetUsers} from './components/action/users'
import {startSetPosts} from './components/action/posts'


const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startSetUsers())
store.dispatch(startSetPosts())

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)



ReactDOM.render(ele, document.getElementById('root'));

