import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    postComment: [
        {
            "id" : 1,
            "userId" : 1,
            "desc" : "asd"
        }
    ]
}

const postCommentSlice = createSlice({
    name: 'PostCommentSlice',
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

export const { addPlayer} = postCommentSlice.actions;
export default postCommentSlice.reducer;