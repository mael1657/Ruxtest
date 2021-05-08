import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/rootReducer';


const store = configureStore({
  reducer: rootReducer,
})
console.log(store.getState())

export default store

