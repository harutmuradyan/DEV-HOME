import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    comments: [
        { id: 1, "desc" : "asd", "userId": 4  , "postId" : 2
        }

    ]
}

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        addComment(state,action){
            state.comments = [
                ...state.comments,
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

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;