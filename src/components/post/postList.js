import  React from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

class PostList extends React.Component
{
    constructor(){
        super()
        this.state={
            posts:[]
        }

    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            const posts= response.data
            this.setState({posts})
        }) 
    }

    render(){
        return (
            <div>
                <h2>listing posts-{this.state.posts.length}</h2>
                {this.state.posts.map((post)=>
                {return(
                    <div key ={post.id}> 
                    <h2 className="text-primary"><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                    <p className="bg-info">{post.body}</p>
                    <hr/>
                    </div>
                )
                })
                }
                          
            </div>
        )
    }
}

export default PostList