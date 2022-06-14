import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    posts: [
        { 
            "id" : 1,
            "userId" : 1,
            "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on.",
            "postCover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 2,
            "userId" : 2,
            "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on. an endless supply of i nnovative projects and features to keep an eye on.",
            "postCover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 3,
            "userId" : 1,
            "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on.",
            "postCover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 4,
            "userId" : 2,
            "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on. an endless supply of i nnovative projects and features to keep an eye on.",
            "postCover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        }
    ]
}

const userpostSlice = createSlice({
    name: 'UserPostSlice',
    initialState,
    reducers: {
        addPlayer(state,action){
            state.data = [
                ...state.data,
                {
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName : action.payload.lastName,
                    createdAt : action.payload.createdAt,
                    teamName : action.payload.teamName
                }
            ]
        },
    },
})

export const { addPlayer} = userpostSlice.actions;
export default userpostSlice.reducer;