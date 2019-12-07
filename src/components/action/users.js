import axios from 'axios'

export const setUsers = (users)=>{     // synchronous action generator
    return {
        type:'SET_USERS',
        payload:users
    }
}

export const resetUsers=()=>{
    return{
        type:'RESET_USERS'
    }
}

 export const startSetUsers =()=>{   ///asynchronouse actio generator
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users=response.data
            dispatch(setUsers(users))
        })
    }
}