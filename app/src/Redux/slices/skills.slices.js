import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    skills : [
        { 
            "id" : 1,
            "userId" : 4,
            "skillName" : "Java Script",
            "like" : 26
        },
        { 
            "id" : 2,
            "userId" : 4,
            "skillName" : "Node JS",
            "like" : 67
        },
        { 
            "id" : 3,
            "userId" : 4,
            "skillName" : "Bootstrap 4",
            "like" : 77
        }
    ]        
}

const skillSlice = createSlice({
    name: 'skillSlice',
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

export const { addPlayer} = skillSlice.actions;
export default skillSlice.reducer;