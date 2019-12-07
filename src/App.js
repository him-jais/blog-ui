import React from 'react';
import './App.css';
import {BrowserRouter, Route,Link,Switch} from 'react-router-dom'
import home from './components/home/home'
import {connect} from 'react-redux'
import userList from './components/user/userList'
import userShow from './components/user/UserShow'
import postList from './components/post/postList'
import PostShow from './components/post/postShow'
import Navbar from './components/navBar'
function App(props) {
  return (
    <BrowserRouter>
          
      <Navbar  />
      <div>
  
        <Switch>
      <Route path="/" component={home} exact />
      <Route path="/user" component={userList} exact/>
      <Route path="/users/:id" component={userShow}/>
      <Route path="/PostList" component={postList}/>
      <Route path="/Posts/:id" component={PostShow}/>
    </Switch>
    </div>
    
    </BrowserRouter>
     
  )
}

const mapStateToProps = (state) =>{
  return{
    users:state.users,
    // posts:state.posts
  } 
}


export default connect(mapStateToProps)(App)
