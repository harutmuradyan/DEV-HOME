import { configureStore } from '@reduxjs/toolkit'
import comapnyReducer from './slices/company.slices';
import userReducer from './slices/user.slices';
import authenticationReducer from './slices/authenticationSlice';

export const store = configureStore({
    reducer:{
         company: comapnyReducer,
         user : userReducer,
         authentication : authenticationReducer
    }
})