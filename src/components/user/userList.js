// import  React from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'
// class User extends React.Component
// {
//     constructor(){
//         super()
//         this.state={
//             users:[]
//         }
//     }
//        componentDidMount()
//        {
//            axios.get('http://jsonplaceholder.typicode.com/users')
//            .then((response)=>{
//                const users=response.data
//                this.setState({users})
//            })
//            .catch(err => {
//                alert(err)
//            })
//        }

//            render(){
//                return(
//                    <div> 
//                        <ul className="list-group">
//                            {this.state.users.map((user)=>{
//                                return<li key={user.id} className="list-group-item" className="shadow p-3 mb-5 bg-white rounded" ><Link to={`/users/${user.id}`}>{user.name}</Link></li>
//                            })}
//                        </ul>
//                    </div>
//                )
//            }
//         }
//         export default User


import  React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class UsersListRedux extends React.Component
{
  

           render(){
               return(
                   <div> 
                       <ul>
                           {this.props.users.map((user)=>{
                               return<li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                           })}
                       </ul>
                   </div>
               )
           }
        }

        const mapStateToProps = (state)=>{
            return{
                users:state.users
            }
        }
        export default connect(mapStateToProps)(UsersListRedux)