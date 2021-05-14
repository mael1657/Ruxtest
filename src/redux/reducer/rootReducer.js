import {combineReducers} from 'redux'
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import filterReducer from './filterReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    login:loginReducer,
    users: userReducer,
    filters: filterReducer,
    categorys: categoryReducer,
});

export default rootReducer;