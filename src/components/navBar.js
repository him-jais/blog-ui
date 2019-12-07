import React from "react"
import {Link} from "react-router-dom"

class  Navbar extends React.Component{
    render(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={process.env.PUBLIC_URL + "/image/pic.jpg"} width="30" height="30" class="d-inline-block align-top" alt=""/>
        <a className="navbar-brand" href="#">BlogUi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <li className="nav-link"><Link to="/">Home</Link> <span className="sr-only">(currently)</span></li>
            </li>
            <li className="nav-item active">
              <li className="nav-link" ><Link to="/user">Users</Link> <span className="sr-only"></span></li>
            </li>
            <li className="nav-item active">
              <li className="nav-link" ><Link to="/PostList">post</Link><span className="sr-only"></span></li>
            </li>
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      
     

      </div>
    )
    }
}
export default Navbar