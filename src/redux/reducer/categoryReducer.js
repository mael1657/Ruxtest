const initialstate = {
    categary1: [
        {
            ct_id:'',
            ct_name:'',
        }
    ],
    category2:[
        {
            ct_id2:'',
            ct_name2:'',
            ct3_list:[
                {
                    ct_id3:'',
                    ct_name3:'',
                },
            ]
        },
    ],

    one : [],
    two : [],
}





function categoryReducer (state = initialstate, action){
    switch(action.type){
        case 'CATEGORY_ONE':
            return{
                ...state,
                category1: action.payload
            }
        case 'CATEGORY_TWO':
            return{
                ...state,
                category2: action.payload,
            }
        default:
            return{
                ...state
            }
    }
}

export default categoryReducer;