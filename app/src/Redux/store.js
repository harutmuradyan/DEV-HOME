import { configureStore } from '@reduxjs/toolkit'
import comapnyReducer from './slices/company.slices';
import userReducer from './slices/user.slices';
import postReducer from './slices/post.slices';
import commentReducer from './slices/comment.slices'
import lessonReducer from './slices/lesson.slices';
import experianceReducer from './slices/experience.slices';
import placeOfLearningReducer from './slices/placesOfLearning.slices';
import licenseReducer from './slices/license.slices';
import skillReducer from './slices/skills.slices';
import vacancieReducer from './slices/vacancie.slices';
import universityReducer from './slices/university.slices';

export const store = configureStore({
    reducer:{
         company: comapnyReducer,
         user : userReducer,
         post : postReducer,
         comment : commentReducer,
         lesson : lessonReducer,
         experiance : experianceReducer,
         placeOfLearning : placeOfLearningReducer,
         license : licenseReducer,
         skill : skillReducer,
         vacancie : vacancieReducer,
         university : universityReducer         
    }
})