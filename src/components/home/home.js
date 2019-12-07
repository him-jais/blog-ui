import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
class Home extends React.Component{

    

    render(){
        return(
            <div>
              <img src={process.env.PUBLIC_URL + "/image/pic.jpg"} alt="mypic" width="100%" height="480px" />
      <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <button><Link to="/PostList">Click</Link></button>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       <button ><Link to="/user">click</Link></button>
      </div>
    </div>
  </div>
</div>


            </div>
        )
    }

}
export default Home