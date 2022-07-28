import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    experiances: [

    ]        
}

const experianceSlice = createSlice({
    name: 'experianceSlice',
    initialState,
    reducers: {
        addExperiance(state,action){
            state.experiances = [
                ...state.experiances,
                {
                    id: action.payload.id,
                    userId: action.payload.userId,
                    companyName : action.payload.companyName,
                    createDate : action.payload.createDate,
                    startWork : action.payload.startWork,
                    endWork : action.payload.endWork,
                    profession : action.payload.profession,
                }
            ]
        }
    },
})

export const { addExperiance , deleteExperiance } = experianceSlice.actions;
export default experianceSlice.reducer;