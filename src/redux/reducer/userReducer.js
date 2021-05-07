const initailstate = {
    user: '',
    token : '',
    isAuth : false
}


function userReducer(state = initailstate, action){
    switch(action.type){
        case 'user':
           return  {
                ...state,
                user : action.payload
            }
        case 'login':
            return  {
                ...state,
                token : action.payload,
                isAuth :true
            }
        default:
            return {
                ...state
            }

    }
}

export default userReducer