import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    postComment: [
        
    ]
}

const postCommentSlice = createSlice({
    name: 'PostCommentSlice',
    initialState,
    reducers: {
        addPostComment(state,action){
            state.postComment = [
                ...state.postComment,
                {
                    id: action.payload.id,
                    userId : action.payload.userId,
                    postId : action.payload.postId,
                    desc : action.payload.desc
                }
            ]
        },
    },
})

export const { addPostComment } = postCommentSlice.actions;
export default postCommentSlice.reducer;