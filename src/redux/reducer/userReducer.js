const initialstate = {
    user: '',
    token:'',
    isLoggedin:false,
}


function userReducer(state = initialstate, action){
    switch(action.type){
        case 'user':
           return  {
                ...state,
                user : action.payload
            }
        case 'auth':
            return  {
                ...state,
               // token : action.payload,
                isLoggedin :true
            }
            case 'logout':
                return {
                    ...state,
                    // token : action.payload,
                     isLoggedin :false
                }
        default:
            return {
                ...state
            }

    }
}

export default userReducer