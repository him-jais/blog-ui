const usersInitialState=[]

const  usersReducer=(state=usersInitialState,action)=>{
          switch(action.type){
              case 'SET_USERS':{
                  return [...action.payload]
              }

              case 'RESET_USERS':{
              return []
              }
              default:{
                  return [...state]
              }
          }
}

export default usersReducer