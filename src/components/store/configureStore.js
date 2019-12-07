import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'//use for asynchronoue function inside the redux
//import countReducer from '../reducer/count'
import usersReducer from '../reducer/users'
import postsReducer from '../reducer/posts'
//import todosReducer from '../reducer/todos'

const configureStore = () => {
    const store = createStore(combineReducers({
        //count: countReducer,
        users:usersReducer,
        posts:postsReducer
        //todos:todosReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore