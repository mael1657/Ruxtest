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
        case 'login':
            return  {
                ...state,
                token : action.payload,
                isLoggedin :true
            }
        default:
            return {
                ...state
            }

    }
}

export default userReducer