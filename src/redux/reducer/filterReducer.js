const initialstate = {
    filter: {
        mt_idx:'',
        bidx:'',
        ct_pid:[],
        ct_id:[],
        ct_id2:[],
        pt_deal_type:'',
        pt_deal_price:'',
        idx:'',
        pt_title:'',
        pt_image1:'',
        pt_selling_price:'',
        pt_selling_edate:'',
        dday:'',
        pt_tag_list:'',
        zzim_yn:'',
    }
}


function filterReducer (state = initialstate, action){
    switch(action.type){
        case 'FILTER_SELECT':
            return{
                ...state,
                filter: action.paylaod
            }
        default:
            return{
                ...state
            }
    }
}

export const filterInitial = {
    mt_idx:'',
    bidx:'',
    ct_pid:'',
    ct_id:'',
    ct_id2:'',
    pt_deal_type:'',
    pt_deal_price:'',
    idx:'',
    pt_title:'',
    pt_image1:'',
    pt_selling_price:'',
    pt_selling_edate:'',
    dday:'',
    pt_tag_list:'',
    zzim_yn:'',
}

export default filterReducer;