import { configureStore } from '@reduxjs/toolkit'
import comapnyReducer from './slices/company.slices';
import userReducer from './slices/user.slices';
import postReducer from './slices/post.slices';
import postCommentReducer from './slices/postComment.slices'
import lessonReducer from './slices/lesson.slices';

export const store = configureStore({
    reducer:{
         company: comapnyReducer,
         user : userReducer,
         post : postReducer,
         postComment : postCommentReducer,
         lesson : lessonReducer
    }
})