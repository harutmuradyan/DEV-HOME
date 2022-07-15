import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    placesOfLearning: [
        { 
            "id" : 1,
            "userId" : 4,
            "universityName" : "Code Academy",
            "startLearning" : "06/06/20",
            "endLearning" : "06/12/20",
            "profession" : "Web developer",
            "logo" : "https://img.freepik.com/premium-vector/luxury-university-logo-design_139869-120.jpg",
        },
        { 
            "id" : 2,
            "userId" : 4,
            "universityName" : "GAN Services",
            "startLearning" : "06/01/21",
            "endLearning" : "25/12/21",
            "profession" : "senyor Web DEV",
            "logo" : "https://media.istockphoto.com/vectors/vector-vector-id876177980?k=20&m=876177980&s=612x612&w=0&h=M6rCqeywN5lqbvOWu0usmPfaHUv3wS_myRo_IBdF8hw=",
        },{ 
            "id" : 3,
            "userId" : 4,
            "universityName" : "Code Academy",
            "startLearning" : "13/02/22",
            "endLearning" : "15/07/22",
            "profession" : "Softwar DEV",
            "logo" : "https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg"
        },
    ]        
}

const placeOfLearningSlice = createSlice({
    name: 'placeOfLearningSlice',
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

export const { addPlayer} = placeOfLearningSlice.actions;
export default placeOfLearningSlice.reducer;