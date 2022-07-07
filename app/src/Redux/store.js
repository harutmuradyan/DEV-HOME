import { configureStore } from '@reduxjs/toolkit'
import comapnyReducer from './slices/company.slices';
import userReducer from './slices/user.slices';
import postReducer from './slices/post.slices';


export const store = configureStore({
    reducer:{
         company: comapnyReducer,
         user : userReducer,
         post : postReducer
    }
})