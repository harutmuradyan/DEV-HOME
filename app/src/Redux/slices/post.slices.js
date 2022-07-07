import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    posts: [
        { 
            "id" : 1,
            "userId" : 1,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 2,
            "userId" : 2,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXiokoNR44hzOnjjAHxdvo2O1tNM8Jej6Aw&usqp=CAU"
        },
        { 
            "id" : 3,
            "userId" : 3,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnqnU5teCaph0WTbI42O0sEKCkvx9mA5jBQ&usqp=CAU"
        }
    ]
}

const postSlice = createSlice({
    name: 'PostSlice',
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

export const { addPlayer} = postSlice.actions;
export default postSlice.reducer;