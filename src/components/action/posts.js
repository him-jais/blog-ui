import axios from 'axios'

export const setUsers = (posts)=>{     // synchronous action generator
    return {
        type:'SET_POSTS',
        payload:posts
    }
}

export const resetPosts=()=>{
    return {
        type:'RESET_POSTS'
    }
}

 export const startSetPosts =()=>{   ///asynchronouse actio generator
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            const posts=response.data
            dispatch(setUsers(posts))
        })
    }
}