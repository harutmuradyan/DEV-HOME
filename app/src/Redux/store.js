import { configureStore } from '@reduxjs/toolkit'
import comapnyReducer from './slices/company.slices';
import userReducer from './slices/user.slices';
import userpostReduces from './slices/userpost.slices';

export const store = configureStore({
    reducer:{
         company: comapnyReducer,
         user : userReducer,
         userpost : userpostReduces
    }
})