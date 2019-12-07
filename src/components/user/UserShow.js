import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component
{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user= response.data
            this.setState({user})
        })

        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const posts= response.data
            this.setState({posts})
        })
    }

    render()
    {
        return(
            <div>
                <h2> user show page-{this.props.match.params.id}</h2>
                <img src={process.env.PUBLIC_URL + "/image/avatar.png"} alt="m.." width="300px" height="300px" align="right"/>
                <p className="text-primary">{this.state.user.username} - {this.state.user.email}-{this.state.user.id}</p>
                <h2>Posts written by user-{this.state.posts.length}</h2>
                
                 <ul className="list-group">{
                     this.state.posts.map(post =>{
                         return <li key={post.id} ><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                     })} </ul>
            </div>
        )
    }

}

export default UserShow